import { useCallback, useState } from 'react'

import AngleDown from "../../img/angle-down.svg";

import style from "./style.module.css";

export default ({ imageUrl, dropdownSide='right', children }) => {
	const [dropdownState, setDropdownState] = useState('closed')

	const onProfileClick = useCallback(() => {
		if (dropdownState === 'closed') {
			setDropdownState('opened')
		} else {
			setDropdownState('closed')
		}
	}, [dropdownState])

	return (
		<div className={style.dropdownWrap}>
			<button className={style.wrap} onClick={onProfileClick}>
				<div className={style.imageWrap}>
					{imageUrl && <img src={imageUrl} className={style.profileImage} />}
				</div>

				<AngleDown />
			</button>

			<div className={[style.dropdownMenu, style[dropdownState], style['side-'+dropdownSide]].join(' ')}>
				{children}
			</div>
		</div>
	);
};

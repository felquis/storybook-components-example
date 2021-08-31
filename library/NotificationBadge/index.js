import { useMemo } from "react";

import Notifications from "../../img/notifications.svg";

import style from "./style.module.css";

export default ({ number, onClick }) => {
	const numberToUse = useMemo(() => {
		if (number > 9) {
			return "+9";
		} else {
			return number;
		}
	}, [number]);

	return (
		<button className={style.wrap} onClick={onClick}>
			{number &&
				<span className={style.number}>{numberToUse}</span>
			}

			<Notifications />
		</button>
	);
};

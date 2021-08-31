import style from './style.module.css'

import IconFlag from '../../img/icon-flag.svg';
import Button from '../Button'
import Clock from '../../img/clock.svg'
import Flames from '../../img/flames.svg'

export default ({
	percentage,
	onClick,
	buttonText,
	buttonSkin='outlined',
	duration,
	score,
}) => {
	return (
		<div className={style.courseRow}>
			<div className={style.card}>
				<div className={style.flex}>
					<div className={style.imageWrap}>
						<IconFlag />
					</div>

					<div className={style.info}>
						<h2 className={style.cardTitle}>Spanish 82</h2>

						<p className={style.cardText}>By Ale Jan Dro</p>
					</div>
				</div>
				
				<div className={style.flex}>
					{duration &&
						<div className={style.block}>
							<Clock />
							{duration}
						</div>
					}

					{score &&
						<div className={style.block}>
							<Flames />
							{score}
						</div>
					}

					{percentage &&
						<div className={style.block}>
							{percentage}
						</div>
					}

					{onClick &&
						<div>
							<Button skin={buttonSkin} onClick={onClick}>{buttonText}</Button>
						</div>
					}
				</div>
			</div>
		</div>
	);
};

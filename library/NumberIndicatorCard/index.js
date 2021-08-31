import style from './style.module.css'

export default ({ number, text }) => {
	return (
		<div className={style.wrap}>
			<div className={style.number}>
				{number}
			</div>

			<p className={style.text}>
				{text}
			</p>
		</div>
	)
}

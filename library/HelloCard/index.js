import Button from "../Button";

import Illustration from "../../img/illustration.svg";

import style from './style.module.css'

export default ({ title, text, buttonText, buttonOnClick }) => {
	return (
		<div className={style.wrap}>
			<div className={style.content}>
				<h2 className={style.title}>{title}</h2>

				<p className={style.text}>{text}</p>
			</div>

			<div className={style.illustration}>
				<Illustration />
			</div>
		</div>
	);
};

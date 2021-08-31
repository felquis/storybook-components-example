import Button from "../Button";

import Illustration from "../../img/illustration-book.svg";

import style from './style.module.css'

export default ({ title, text, buttonText, buttonOnClick }) => {
	return (
		<div className={style.wrap}>
			<div className={style.content}>
				<h2 className={style.title}>{title}</h2>

				<p className={style.text}>{text}</p>

				<Button onClick={buttonOnClick}>{buttonText}</Button>
			</div>

			<div className={style.illustration}>
				<Illustration />
			</div>
		</div>
	);
};

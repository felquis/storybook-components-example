import style from "./style.module.css";

export default ({ items = [] }) => {
	return (
		<div className={style.tabItems}>
			{items.map((item) => (
				<button
					className={[style.button, item.active ? style.active : ""].join(" ")}
				>
					{item.text}
				</button>
			))}
		</div>
	);
};

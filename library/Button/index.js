import style from "./style.module.css";

export default ({ children, skin = "flat" }) => {
	return <button className={[style.resetButton, style["skin-" + skin]].join(' ')}>{children}</button>;
};

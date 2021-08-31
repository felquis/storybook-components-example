import Search from "../../img/search.svg";
import style from "./style.module.css";

export default ({ name }) => {
	return (
		<label className={style.wrap}>
			<Search />

			<input type="search" name={name} className={style.input} placeholder="Search your courses" />
		</label>
	);
};

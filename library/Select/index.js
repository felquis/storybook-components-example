import { useCallback, useEffect, useState, useMemo } from "react";

import AngleDown from "../../img/angle-down.svg";

import style from "./style.module.css";

export default ({ name, id, value = "week", onChange, options=[] }) => {
	console.count("basic render");

	const [internalValue, setInternalValue] = useState(value);
	
	const internalOnChange = useCallback((event) => {
		console.count("onChange");
		setInternalValue(event.target.value)
	});

	const internalSelectedValueText = useMemo(() => {
		console.count("internalSelectedValueText");
		return options.find(x => x.value === internalValue).text
	}, [internalValue, options])

	return (
		<div className={style.wrap}>
			<select
				name={name}
				id={id}
				value={internalValue}
				className={style.select}
				onChange={internalOnChange}
			>
				{options.map((option) => (
					<option value={option.value}>{option.text}</option>
				))}
			</select>

			<div className={style.selectedText}>
				{internalSelectedValueText}
				<AngleDown />
			</div>
		</div>
	);
};

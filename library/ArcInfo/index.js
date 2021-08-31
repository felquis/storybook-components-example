import React, { useEffect, useState, useRef } from "react";
import {Motion, spring} from 'react-motion';

import style from "./style.module.css";

const ProgressBar = (props) => {
	const circleRef = useRef(null);
	const {
		size = 40,
		progress = 50,
		strokeWidth = 4,
		circleOneStroke = "white",
		circleTwoStroke = "#0C0B0B",
	} = props;

	const center = size / 2;
	const radius = size / 2 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;

	const [offset, setOffset] = useState(circumference);

	useEffect(() => {
		const progressOffset = ((100 - progress) / 100) * circumference;

		setOffset(progressOffset);

	}, [setOffset, circumference, progress, offset]);

	return (
		<div className={style.wrap}>
			<svg className={style.svg} width={size} height={size}>
				<circle
					className={style["svg-circle-bg"]}
					stroke={circleOneStroke}
					cx={center}
					cy={center}
					r={radius}
					strokeWidth={strokeWidth}
				/>

				<circle
					className={style["svg-circle"]}
					ref={circleRef}
					stroke={circleTwoStroke}
					cx={center}
					cy={center}
					r={radius}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
				/>
			</svg>
				<Motion defaultStyle={{x: 0}} style={{x: spring(progress)}}>
					{value => <div className={style.centeredText}>
						{Math.round(value.x)}%
					</div>}
				</Motion>
		</div>
	);
};

export default ProgressBar;

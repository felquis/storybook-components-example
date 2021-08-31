import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Rectangle,
} from "recharts";

import style from "./style.module.css";

const data = [
	{
		name: "Mon",
		hours: 0,
	},
	{
		name: "Tue",
		hours: 1.5,
	},
	{
		name: "Wed",
		hours: 2.5,
	},
	{
		name: "Thu",
		hours: 1,
	},
	{
		name: "Fri",
		hours: 4,
	},
	{
		name: "Sat",
		hours: 3,
	},
	{
		name: "Sun",
		hours: 2,
	},
];

const max = data.reduce((acc, prev) => Math.max(acc, prev.hours), 0) + 1;
const YTicks = Array.from({ length: max + 1 })
	.fill("")
	.map((x, i) => i);

const Bullet = () => {
	return (
		<i className={style.bullet}></i>
	)
}

const CustomizedLabel = ({ x, y, stroke, value }) => {
	return (
		<g>
			<foreignObject x={x - 35} y={y - 62} width={101} height={90}>
				<div className={style.label}>
					{value}h
				</div>
			</foreignObject>
		</g>
	);
};

const CustomizedDot = (props) => {
  const {
    cx, cy, stroke, payload, value,
  } = props;

  return (
    <g>
      <foreignObject x={cx - 6} y={cy - 6} width={11} height={11}>
      	<Bullet />
      </foreignObject>
    </g>
  );
};

const CustomizedXAxisTick = ({ x, y, stroke, payload }) => {
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={30}
				dx={15}
				textAnchor="end"
				style={{
					fontSize: "13px",
					textTransform: 'lowercase'
				}}
				transform="rotate(0)"
			>
				{payload.value}
			</text>
		</g>
	);
};

const CustomizedYAxisTick = ({ x, y, stroke, payload }) => {
	return (
		<g>
			<text
				x={x}
				y={y}
				dx={-20}
				textAnchor="end"
				style={{
					fontSize: "13px",
					textTransform: 'lowercase'
				}}
				transform="rotate(0)"
			>
				{payload.value}
			</text>
		</g>
	);
};

export default () => {
	return (
		<>
			<LineChart
				width={450}
				height={266}
				data={data}
				margin={{
					top: 30,
					right: 60,
					bottom: 10,
				}}
			>
				<CartesianGrid stroke="#F5F5F7" strokeWidth="1px" vertical={false} />

				<XAxis
					className={style.XAxis}
					strokeWidth="0"
					dataKey="name"
					tick={<CustomizedXAxisTick />}
				/>

				<YAxis
					dataKey="hours"
					tickLine={false}
					axisLine={false}
					type="number"
					height={266}
					ticks={YTicks}
					tickCount={YTicks.length}
					interval={0}
					fill="#0C0B0B"
					tick={<CustomizedYAxisTick />}
				/>

				<Line
					type="monotoneX"
					dataKey="hours"
					stroke="#0C0B0B"
					strokeWidth="2px"
					label={<CustomizedLabel />}
					dot={<CustomizedDot />}
				/>
			</LineChart>
		</>
	);
};

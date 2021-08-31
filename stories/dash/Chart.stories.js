import React from "react";

import Chart from "./../../library/Chart";

export default {
	title: "Chart",
	component: Chart,
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};

const Template = (args) => (
	<div>
		<Chart {...args} />
	</div>
);

export const Flat = Template.bind({});
Flat.args = {
	skin: "flat",
	children: "text",
};

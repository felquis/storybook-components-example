import React from "react";

import CourseCard from "./../../library/CourseCard";

export default {
	title: "CourseCard",
	component: CourseCard,
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

const Template = (args) => (
	<>
		{Array.from({ length: 4 })
			.fill({})
			.map((x) => (
				<CourseCard {...args} />
			))}
	</>
);

export const Simple = Template.bind({});
Simple.args = {
	onClick: () => null,
	buttonText: 'View Course',
	buttonSkin: 'outlined',
};

export const Duration = Template.bind({});
Duration.args = {
	onClick: () => null,
	duration: "4h30m",
	buttonText: 'View Course',
	buttonSkin: 'outlined',
};

export const Score = Template.bind({});
Score.args = {
	onClick: () => null,
	duration: "4h30m",
	score: 4.7,
	buttonText: 'View Course',
	buttonSkin: 'outlined',
};

export const Percentage = Template.bind({});
Percentage.args = {
	onClick: () => null,
	percentage: 85,
	buttonText: 'View Course',
	buttonSkin: 'outlined',
};

export const Continue = Template.bind({});
Continue.args = {
	onClick: () => null,
	percentage: 85,
	buttonText: 'Continue',
	buttonSkin: 'flat',
};

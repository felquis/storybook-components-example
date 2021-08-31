import React from 'react';

import Select from './../../library/Select';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
	options: [{
		value: 'week',
		text: 'Week',
	}, {
		value: 'month',
		text: 'Month',
	}, {
		value: 'year',
		text: 'Year',
	}]
};

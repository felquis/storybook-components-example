import React from 'react';

import NumberIndicatorCard from './../../library/NumberIndicatorCard';

export default {
  title: 'NumberIndicatorCard',
  component: NumberIndicatorCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <NumberIndicatorCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	number: 12,
	text: 'Courses Completed'
};

export const Second = Template.bind({});
Second.args = {
	number: 4,
	text: 'Courses in progress'
};

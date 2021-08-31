import React from 'react';

import CTACard from './../../library/CTACard';

export default {
  title: 'CTACard',
  component: CTACard,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <CTACard {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Lern even more!',
	text: 'Unlock premium features only for $9.99 per month.',
	buttonText: 'Go Premium',
	buttonOnClick: () => null
};

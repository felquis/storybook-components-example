import React from 'react';

import HelloCard from './../../library/HelloCard';

export default {
  title: 'HelloCard',
  component: HelloCard,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <HelloCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Hello Learner!',
	text: 'It’s good to see you again.',
};

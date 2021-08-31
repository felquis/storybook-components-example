import React from 'react';

import SectionTitle from './../../library/SectionTitle';

export default {
  title: 'SectionTitle',
  component: SectionTitle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <SectionTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  	children: 'The Titles'
};

import React from 'react';

import Menu from './../../library/Menu';

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});

Default.args = {
  
};

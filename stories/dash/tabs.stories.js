import React from 'react';

import Tabs from './../../library/Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
	items: [{
		text: 'Item 1'
	}, {
		text: 'Item 2',
		active: true,
	}, {
		text: 'Item 3'
	}],
};

export const Flat = Template.bind({});
Flat.args = {
	items: [{
		text: 'Item 1',
		active: true,
	},{
		text: 'Item 2'
	},{
		text: 'Item 2'
	},{
		text: 'Item 2'
	},{
		text: 'Item 2'
	},{
		text: 'Item 2'
	}, {
		text: 'Item 3'
	}],
};

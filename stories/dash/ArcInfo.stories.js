import React from 'react';

import ArcInfo from './../../library/ArcInfo';

export default {
  title: 'ArcInfo',
  component: ArcInfo,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <>Content<ArcInfo {...args} />Content</>;

export const Default = Template.bind({});
Default.args = {
	progress: 10,
};


export const Default20 = Template.bind({});
Default20.args = {
	progress: 20,
};

export const Default30 = Template.bind({});
Default30.args = {
	progress: 30,
};


export const Default50 = Template.bind({});
Default50.args = {
	progress: 50,
};

export const Default70 = Template.bind({});
Default70.args = {
	progress: 70,
};

export const Default90 = Template.bind({});
Default90.args = {
	progress: 90,
};

export const Default100 = Template.bind({});
Default100.args = {
	progress: 100,
};

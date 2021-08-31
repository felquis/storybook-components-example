import React from 'react';

import Button from './../../library/Button';
import ArrowLeft from './../../img/arrow-left.svg'
import ArrowRight from './../../img/arrow-right.svg'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Flat = Template.bind({});
Flat.args = {
	skin: 'flat',
	children: 'text',
};

export const Outlined = Template.bind({});
Outlined.args = {
	skin: 'outlined',
	children: 'Outlined',
};

export const Clean = Template.bind({});
Clean.args = {
	skin: 'clean',
	children: 'Clean',
};

export const FlatIcon = Template.bind({})
FlatIcon.args = {
	skin: 'flat-icon',
	children: <ArrowLeft />
}

export const OutlinedIcon = Template.bind({})
OutlinedIcon.args = {
	skin: 'outlined-icon',
	children: <ArrowLeft />
}


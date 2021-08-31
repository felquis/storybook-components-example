import React from 'react';

import NotificationBadge from './../../library/NotificationBadge';

export default {
  title: 'NotificationBadge',
  component: NotificationBadge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <NotificationBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
	onClick: () => null,
};

export const Number = Template.bind({});
Number.args = {
	number: '4',
};

export const BigNumber = Template.bind({});
BigNumber.args = {
	number: '14',
};

export const ExtraBigNumber = Template.bind({});
ExtraBigNumber.args = {
	number: '101',
};

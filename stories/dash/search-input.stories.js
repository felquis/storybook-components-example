import React from 'react';

import SearchInput from './../../library/SearchInput';

export default {
  title: 'SearchInput',
  component: SearchInput,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	skin: 'outlined',
	children: 'Outlined Color SearchInput',
};

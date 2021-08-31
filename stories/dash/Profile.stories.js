import React from "react";

import Profile from "./../../library/Profile";
import Button from "./../../library/Button";
import imageUrl from "../../img/profile-image.png";

export default {
	title: "Profile",
	component: Profile,
	argTypes: {
		// backgroundColor: { control: "color" },
	},
};

const Template = (args) => <Profile {...args}>
	<div style={{ width: "300px" }}>
		<div>
			<Button skin="clean">Profile</Button>
		</div>
		<div>
			<Button skin="clean">Settings</Button>
		</div>
		<div>
			<Button skin="clean">Change Accounts</Button>
		</div>
	</div>
</Profile>;

export const Default = Template.bind({});
Default.args = {
	imageUrl: imageUrl,
	dropdownSide: "left",
};

export const MissingImage = Template.bind({});
MissingImage.args = {
	imageUrl: "",
};

export const Menu = Template.bind({});
Menu.args = {
	imageUrl: imageUrl,
};

export const Left = Template.bind({});
Left.args = {
	imageUrl: imageUrl,
	dropdownSide: "left",
};

export const Right = Template.bind({});
Right.args = {
	imageUrl: imageUrl,
	dropdownSide: "right",
};

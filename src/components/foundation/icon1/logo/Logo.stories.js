import React from 'react';
import {Logo} from "./Logo";

const LogoTemplate = (args) => <Logo {...args}/>

export default {
    title: "Logo",
}

export const StoryLogo = LogoTemplate.bind({});
StoryLogo.args = {
    status: "Light"
}
import React from 'react';
import {NavLi} from "./Li";

const NavLiTemplate = (args) => <NavLi {...args}/>

export default {
    title: "Li",
}

export const StoryNavLi = NavLiTemplate.bind({});
StoryNavLi.args = {
    children: "duo"
}


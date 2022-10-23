import React from 'react';
import {NavUl} from "./Ul";


export default {
    title: "Ul",
}

const NavUlTemplate = (args) => <NavUl {...args}/>

export const StoryNavUl = NavUlTemplate.bind({});
StoryNavUl.args = {
    children: ["Duo", "Solo"]
}
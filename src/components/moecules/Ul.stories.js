import React from 'react';
import {NavUl} from "./Ul";
import {withRouter} from "storybook-addon-react-router-v6";


export default {
    title: "Ul",
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: "/duo",
        }
    }
}

const NavUlTemplate = (args) => <NavUl {...args}/>

export const StoryNavUl = NavUlTemplate.bind({});
StoryNavUl.args = {
    children: ["Duo", "Solo"]
}
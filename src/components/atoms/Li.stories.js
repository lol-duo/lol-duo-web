import React from 'react';
import {NavLi} from "./Li";
import {withRouter} from "storybook-addon-react-router-v6";

const NavLiTemplate = (args) => <NavLi {...args}/>

export default {
    title: "Li",
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: "/duo",
        }
    }
}

export const StoryNavLi = NavLiTemplate.bind({});
StoryNavLi.args = {
    children: "duo",
}


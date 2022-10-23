import React from 'react';
import {Gnb, GnbLogo} from "./Gnb";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
    title: "Gnb",
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: "/duo",
        }
    }
}

const GnbLogoTemplate = (args) => <GnbLogo {...args}/>
const GnbTemplate = (args) => <Gnb {...args}/>

export const StoryGnbLogo = GnbLogoTemplate.bind({});
StoryGnbLogo.args = {}

export const StoryGnb = GnbTemplate.bind({});
StoryGnb.args = {
    children: ["Duo", "Solo"]
}
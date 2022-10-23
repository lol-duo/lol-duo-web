import React from 'react';
import {MainHeader} from "./Header";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
    title: "Header",
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: "/duo",
        }
    }
}

const MainHeaderTemplate = (args) => <MainHeader {...args}/>

export const StoryMainHeader = MainHeaderTemplate.bind({});
StoryMainHeader.args = {}
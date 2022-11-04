import React from 'react';
import {withRouter} from "storybook-addon-react-router-v6";
import {MainHeader} from "./Header";

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
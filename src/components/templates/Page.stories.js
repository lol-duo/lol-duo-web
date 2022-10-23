import React from 'react';
import {SoloMainPage} from "./Page";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
    title: "Page",
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: "/duo",
        }
    }
}

const MainSoloPageTemplate = (args) => <SoloMainPage {...args}/>

export const StoryMainSoloPage = MainSoloPageTemplate.bind({});
StoryMainSoloPage.args = {}
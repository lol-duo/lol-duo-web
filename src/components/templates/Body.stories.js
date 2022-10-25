import React from 'react';
import {DuoMainBody, SoloMainBody} from "./Body";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
    title: "Body",
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: "/duo",
        }
    }
}

const SoloMainBodyTemplate = (args) => <SoloMainBody {...args}/>
const DuoMainBodyTemplate = (args) => <DuoMainBody {...args}/>

export const StorySoloMainBody = SoloMainBodyTemplate.bind({});
StorySoloMainBody.args = {
    newCss: {
        paddingTop: "276px",
    }
}

export const StoryDuoMainBody = DuoMainBodyTemplate.bind({});
StoryDuoMainBody.args = {
    newCss: {
        paddingTop: "276px",
    }
}
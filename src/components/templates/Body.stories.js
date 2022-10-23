import React from 'react';
import {SoloMainBody} from "./Body";
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

export const StorySoloMainBody = SoloMainBodyTemplate.bind({});
StorySoloMainBody.args = {}
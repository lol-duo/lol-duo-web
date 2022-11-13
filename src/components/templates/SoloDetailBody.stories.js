import React from 'react';
import {withRouter} from "storybook-addon-react-router-v6";
import {SoloDetailBody} from "./SoloDetailBody";

export default {
    title: "SoloDetailBody",
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: "/solo/detail?id=1",
        }
    }
}

const SoloDetailBodyTemplate = (args) => <SoloDetailBody {...args}/>
export const StorySoloDetailBody = SoloDetailBodyTemplate.bind({});
StorySoloDetailBody.args = {}
import React from 'react';
import {SoloMainBody} from "./Body";

export default {
    title: "Body",
}

const SoloMainBodyTemplate = (args) => <SoloMainBody {...args}/>

export const StorySoloMainBoyd = SoloMainBodyTemplate.bind({});
StorySoloMainBoyd.args = {}
import React from 'react';
import {SoloThead} from "./Thead";

export default {
    title: "Thead",
}

const SoloTheadTemplate = (args) => <SoloThead {...args}/>

export const StorySoloThead = SoloTheadTemplate.bind({});
StorySoloThead.args = {
    children: ["Rank", "Champion", "Win Rate"]
}
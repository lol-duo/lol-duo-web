import React from 'react';
import {MainThead} from "./Thead";

export default {
    title: "Thead",
}

const SoloTheadTemplate = (args) => <MainThead {...args}/>

export const StorySoloThead = SoloTheadTemplate.bind({});
StorySoloThead.args = {
    children: ["Rank", "Champion", "Win Rate"]
}
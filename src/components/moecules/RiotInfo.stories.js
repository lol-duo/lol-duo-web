import React from 'react';
import {RiotInfo} from "./RiotInfo";


export default {
    title: "RiotInfo",
}

const RiotInfoTemplate = (args) => <RiotInfo {...args}/>

export const StoryRiotInfo = RiotInfoTemplate.bind({});
StoryRiotInfo.args = {}

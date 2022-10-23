import React from "react";
import {TextTh} from "./Th";

const TextThTemplate = (args) => <TextTh {...args} />

export default {
    title: "Th",
}

export const StoryTextTh = TextThTemplate.bind({});
StoryTextTh.args = {
    children: "Rank"
}
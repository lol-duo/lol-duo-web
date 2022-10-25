import React from "react";
import {SelectedText, SelectText} from "./Text";

export default {
    title: "Text",
}

const SelectTextTemplate = (args) => <SelectText {...args} />
const SelectedTextTemplate = (args) => <SelectedText {...args} />

export const StorySelectText = SelectTextTemplate.bind({});
StorySelectText.args = {
    text: "Champion",
}

export const StorySelectedText = SelectedTextTemplate.bind({});
StorySelectedText.args = {
    text: "ALL",
}


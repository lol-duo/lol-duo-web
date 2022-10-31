import React from 'react';
import {SearchGlassIcon} from "./Icon";

const SearchGlassIconTemplate = (args) => <SearchGlassIcon {...args}/>

export default {
    title: "Default",
}

export const StorySearchGlassIcon = SearchGlassIconTemplate.bind({});
StorySearchGlassIcon.args = {}
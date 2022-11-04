import React from 'react';
import {RankUpIcon, SearchGlassIcon} from "./Icon";

const SearchGlassIconTemplate = (args) => <SearchGlassIcon {...args}/>
const RankUpIconTemplate = (args) => <RankUpIcon {...args}/>

export default {
    title: "Default",
}

export const StorySearchGlassIcon = SearchGlassIconTemplate.bind({});
StorySearchGlassIcon.args = {}

export const StoryRankUpIcon = RankUpIconTemplate.bind({});
StoryRankUpIcon.args = {
    rankChangeNumber: 1
}

import React from 'react';
import {ArrowIcon, RankUpIcon, SearchGlassIcon} from "./Icon";
import {RankBadge} from "./RankBadge";


const SearchGlassIconTemplate = (args) => <SearchGlassIcon {...args}/>
const RankUpIconTemplate = (args) => <RankUpIcon {...args}/>
const ArrowIconTemplate = (args) => <ArrowIcon {...args}/>
const RankBadgeTemplate = (args) => <RankBadge {...args}/>

export default {
    title: "Default",
}

export const StorySearchGlassIcon = SearchGlassIconTemplate.bind({});
StorySearchGlassIcon.args = {}

export const StoryRankUpIcon = RankUpIconTemplate.bind({});
StoryRankUpIcon.args = {
    rankChangeNumber: 1
}

export const StoryArrowIcon = ArrowIconTemplate.bind({});
StoryArrowIcon.args = {
    direction: "up"
}

export const StoryRankBadge = RankBadgeTemplate.bind({});
StoryRankBadge.args = {
    rank: 1
}
import React from 'react';

import {SearchBarChampion, SearchBarPosition} from "./SearchBarList";

export default {
    title: "SearchBarList",
}

const SearchBarListTemplate = (args) => <SearchBarPosition {...args}/>
const SearchBarChampionTemplate = (args) => <SearchBarChampion {...args}/>

export const StorySearchBarList = SearchBarListTemplate.bind({});
StorySearchBarList.args = {
    line: "ALL",
}

export const StorySearchBarChampion = SearchBarChampionTemplate.bind({});
StorySearchBarChampion.args = {
    src: "https://d2d4ci5rabfoyr.cloudfront.net/champion/Annie.png",
    name: "애니"
}
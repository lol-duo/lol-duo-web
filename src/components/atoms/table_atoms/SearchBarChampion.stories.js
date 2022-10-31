import React from 'react';

import {SearchBarChampion} from "./SearchBarChampion";

const SearchBarChampionTemplate = (args) => <SearchBarChampion {...args}/>

export default {
    title: "SearchBarChampion",
}

export const StorySearchBarChampion = SearchBarChampionTemplate.bind({});
StorySearchBarChampion.args = {
    champion: "가렌",
}
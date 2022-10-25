import React from 'react';
import {SearchBar} from "./SearchBar";

const SearchBarTemplate = (args) => <SearchBar {...args}/>

export default {
    title: "SearchBar",
}

export const StorySearchBar = SearchBarTemplate.bind({});
StorySearchBar.args = {}
import React from 'react';

import {SearchBarPosition} from "./SearchBarPosition";

const SearchBarPositionTemplate = (args) => <SearchBarPosition {...args}/>

export default {
    title: "SearchBarPosition",
}

export const StorySearchBarPosition = SearchBarPositionTemplate.bind({});
StorySearchBarPosition.args = {
    selectedPosition: "TOP",
}
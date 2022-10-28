import React from 'react';
import {SearchBarPosition} from "./SearchBarPosition";
import {SearchBarPositionCircle} from "./SearchBarPositionCircle";


const SearchBarPositionTemplate = (args) => <SearchBarPosition {...args}/>
const SearchBarPositionCircleTemplate = (args) => <SearchBarPositionCircle {...args}/>

export default {
    title: "positionIcon",
}

export const StorySearchBarPosition = SearchBarPositionTemplate.bind({});
StorySearchBarPosition.args = {
    position: "TOP",
}

export const StorySearchBarPositionCircle = SearchBarPositionCircleTemplate.bind({});
StorySearchBarPositionCircle.args = {
    position: "TOP",
}
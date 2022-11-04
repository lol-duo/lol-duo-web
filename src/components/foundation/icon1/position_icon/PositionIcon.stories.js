import React from 'react';
import {SearchBarPosition} from "./SearchBarPosition";
import {SearchBarPositionCircle} from "./SearchBarPositionCircle";
import assets from "../../../../assets/assets";


const SearchBarPositionTemplate = (args) => <SearchBarPosition {...args}/>
const SearchBarPositionCircleTemplate = (args) => <SearchBarPositionCircle {...args}/>

export default {
    title: "positionIcon",
}

export const StorySearchBarPosition = SearchBarPositionTemplate.bind({});
StorySearchBarPosition.args = {
    position: assets.position.all,
}

export const StorySearchBarPositionCircle = SearchBarPositionCircleTemplate.bind({});
StorySearchBarPositionCircle.args = {
    position: assets.position.all,
}
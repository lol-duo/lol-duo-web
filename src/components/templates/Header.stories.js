import React from 'react';
import {MainHeader} from "./Header";

export default {
    title: "Header",
}

const MainHeaderTemplate = (args) => <MainHeader {...args}/>

export const StoryMainHeader = MainHeaderTemplate.bind({});
StoryMainHeader.args = {}
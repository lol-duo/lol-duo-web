import React from 'react';
import {MainFooter} from "./Footer";

export default {
    title: "Footer",
}

const MainFooterTemplate = (args) => <MainFooter {...args}/>

export const StoryMainFooter = MainFooterTemplate.bind({});
StoryMainFooter.args = {}
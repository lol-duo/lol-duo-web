import React from 'react';
import {SoloMainPage} from "./Page";

export default {
    title: "Page",
}

const MainSoloPageTemplate = (args) => <SoloMainPage {...args}/>

export const StoryMainSoloPage = MainSoloPageTemplate.bind({});
StoryMainSoloPage.args = {}
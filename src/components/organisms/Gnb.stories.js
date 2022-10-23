import React from 'react';
import {GnbLogo} from "./Gnb";

export default {
    title: "Gnb",
}

const GnbLogoTemplate = (args) => <GnbLogo {...args}/>

export const StoryGnbLogo = GnbLogoTemplate.bind({});
StoryGnbLogo.args = {}
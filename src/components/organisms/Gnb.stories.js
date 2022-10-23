import React from 'react';
import {Gnb, GnbLogo} from "./Gnb";

export default {
    title: "Gnb",
}

const GnbLogoTemplate = (args) => <GnbLogo {...args}/>
const GnbTemplate = (args) => <Gnb {...args}/>

export const StoryGnbLogo = GnbLogoTemplate.bind({});
StoryGnbLogo.args = {}

export const StoryGnb = GnbTemplate.bind({});
StoryGnb.args = {
    children: ["Duo", "Solo"]
}
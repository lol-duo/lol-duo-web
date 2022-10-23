import React from 'react';
import {DarkLogoBundle, LightLogoBundle} from "./LogoBundle";

export default {
    title: "LogoBundle",
}

const DarkLogoBundleTemplate = (args) => <DarkLogoBundle {...args}/>
const LightLogoBundleTemplate = (args) => <LightLogoBundle {...args}/>

export const StoryDarkLogoBundle = DarkLogoBundleTemplate.bind({});
StoryDarkLogoBundle.args = {}

export const StoryLightLogoBundle = LightLogoBundleTemplate.bind({});
StoryLightLogoBundle.args = {}
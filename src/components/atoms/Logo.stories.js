import React from 'react';
import {DarkLogo, LightLogo, LightName} from "./Logo";

export default {
    title: "Logo",
}

const DarkLogoTemplate = (args) => <DarkLogo {...args} />
const LightLogoTemplate = (args) => <LightLogo {...args}/>
const LightNameTemplate = (args) => <LightName {...args}/>


export const StoryDarkLogo = DarkLogoTemplate.bind({});
StoryDarkLogo.args = {}

export const StoryLightLogo = LightLogoTemplate.bind({});
StoryLightLogo.args = {}

export const StoryLightName = LightNameTemplate.bind({});
StoryLightName.args = {}
import React from 'react';
import {DarkLogo, DotDotDot, LightLogo, LightName} from "./StaticImage";

export default {
    title: "StaticImage",
}

const DarkLogoTemplate = (args) => <DarkLogo {...args} />
const LightLogoTemplate = (args) => <LightLogo {...args}/>
const LightNameTemplate = (args) => <LightName {...args}/>
const DotDotDotTemplate = (args) => <DotDotDot {...args}/>

export const StoryDarkLogo = DarkLogoTemplate.bind({});
StoryDarkLogo.args = {}

export const StoryLightLogo = LightLogoTemplate.bind({});
StoryLightLogo.args = {}

export const StoryLightName = LightNameTemplate.bind({});
StoryLightName.args = {}

export const StoryDotDotDot = DotDotDotTemplate.bind({});
StoryDotDotDot.args = {}
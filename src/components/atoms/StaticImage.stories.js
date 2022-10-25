import React from 'react';
import {DarkLogo, DotDotDot, LightLogo, LightName, SelectChampion, SelectLine} from "./StaticImage";

export default {
    title: "StaticImage",
}

const DarkLogoTemplate = (args) => <DarkLogo {...args} />
const LightLogoTemplate = (args) => <LightLogo {...args}/>
const LightNameTemplate = (args) => <LightName {...args}/>
const DotDotDotTemplate = (args) => <DotDotDot {...args}/>
const SelectLineTemplate = (args) => <SelectLine {...args}/>
const SelectChampionTemplate = (args) => <SelectChampion {...args}/>

export const StoryDarkLogo = DarkLogoTemplate.bind({});
StoryDarkLogo.args = {}

export const StoryLightLogo = LightLogoTemplate.bind({});
StoryLightLogo.args = {}

export const StoryLightName = LightNameTemplate.bind({});
StoryLightName.args = {}

export const StoryDotDotDot = DotDotDotTemplate.bind({});
StoryDotDotDot.args = {}

export const StorySelectLine = SelectLineTemplate.bind({});
StorySelectLine.args = {
    line: "ALL"
}

export const StorySelectChampion = SelectChampionTemplate.bind({});
StorySelectChampion.args = {
    src: "https://d2d4ci5rabfoyr.cloudfront.net/champion/Annie.png",
}
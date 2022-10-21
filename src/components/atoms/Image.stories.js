import React from 'react';
import {LineImage, RuneImage, SoloChampionImage} from "./Image";

const SoloChampionTemplate = (args) => <SoloChampionImage {...args}/>
const RuneTemplate = (args) => <RuneImage {...args}/>
const LineTemplate = (args) => <LineImage {...args}/>

export default {
    title: "Image",
}

export const StorySoloChampionImage = SoloChampionTemplate.bind({});
StorySoloChampionImage.args = {
    src: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Rammus.svg"
}

export const StoryRuneImage = RuneTemplate.bind({});
StoryRuneImage.args = {
    src: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/Conqueror.svg"
}

export const StoryLineImage = LineTemplate.bind({});
StoryLineImage.args = {
    src: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/MIDDLE.svg"
}
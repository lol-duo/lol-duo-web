import React from 'react';
import {SoloChampion} from "./Champion";

export default {
    title: "Champion",
    component: ""
}

const SoloChampionTemplate = (args) => <SoloChampion {...args}/>

export const Solo = SoloChampionTemplate.bind({});
Solo.args = {
    championInfo: {
        champion: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Rammus.svg",
        rune: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Rammus.svg",
        line: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/MIDDLE.svg",
        name: "람머스"
    }
}
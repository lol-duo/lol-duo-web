import React from 'react';
import {Champion, DuoChampion, SoloChampion} from "./Champion";

export default {
    title: "Champion",
}

const ChampionTemplate = (args) => <Champion {...args}/>
const DuoChampionTemplate = (args) => <DuoChampion{...args}/>
const SoloChampionTemplate = (args) => <SoloChampion {...args}/>

export const StoryChampion = ChampionTemplate.bind({});
StoryChampion.args = {
    championInfo: {
        champion: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Rammus.svg",
        rune: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/Conqueror.svg",
        line: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/MIDDLE.svg",
    }
}
export const StoryDuoChampion = DuoChampionTemplate.bind({});
StoryDuoChampion.args = {
    championInfo: StoryChampion.args.championInfo,
    name: "람머스",
}

export const StorySoloChampion = SoloChampionTemplate.bind({});
StorySoloChampion.args = {
    championInfo: StoryChampion.args.championInfo,
    name: "람머스",
}
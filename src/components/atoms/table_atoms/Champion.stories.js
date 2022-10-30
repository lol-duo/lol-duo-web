import React from 'react';
import {Champion} from "./Champion";

const ChampionTemplate = (args) => <Champion {...args}/>

export default {
    title: "Champion",
}

export const StoryChampion = ChampionTemplate.bind({});
StoryChampion.args = {
    championInfo: {
        championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/MissFortune.svg",
        mainRuneImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/LethalTempoTemp.svg",
        positionImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/BOTTOM.svg",
        championName: "미스 포츈",
    },
    size: "big",
    isSolo: true,
}
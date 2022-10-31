import React from 'react';
import {Champion} from "./Champion";

const ChampionTemplate = (args) => <Champion {...args}/>

export default {
    title: "Champion",
}

export const StoryChampionBig = ChampionTemplate.bind({});
StoryChampionBig.args = {
    championInfo: {
        championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/MissFortune.svg",
        mainRuneImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/LethalTempoTemp.svg",
        positionImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/BOTTOM.svg",
        championName: "미스 포츈",
    },
    size: "big",
}

export const StoryChampionSmallSolo = ChampionTemplate.bind({});
StoryChampionSmallSolo.args = {
    championInfo: {
        championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/MissFortune.svg",
        mainRuneImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/LethalTempoTemp.svg",
        positionImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/BOTTOM.svg",
        championName: "미스 포츈",
    },
    size: "small",
    isSolo: true,
}

export const StoryChampionSmallDuo = ChampionTemplate.bind({});
StoryChampionSmallDuo.args = {
    championInfo: {
        championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/MissFortune.svg",
        mainRuneImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/LethalTempoTemp.svg",
        positionImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/BOTTOM.svg",
        championName: "미스 포츈",
    },
    size: "small",
    isSolo: false,
}


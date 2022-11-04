import React from 'react';

import {SoloTable} from "./SoloTable";

const SoloTableTemplate = (args) => <SoloTable {...args}/>

export default {
    title: "SoloTable",
}

export const StorySoloTable = SoloTableTemplate.bind({});
StorySoloTable.args = {
    championInfo: {
        "id": 442,
        "rankChangeImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/RankSame.svg",
        "rankChangeNumber": 0,
        "championName": "미스 포츈",
        "championImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/MissFortune.svg",
        "mainRuneImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/LethalTempoTemp.svg",
        "positionImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/BOTTOM.svg",
        "winRate": "58.30%",
        "rankNumber": 1
    }
}
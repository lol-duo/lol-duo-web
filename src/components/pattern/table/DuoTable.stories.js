import React from 'react';

import {BigDuoTable, DuoTable} from "./DuoTable";

const BigDuoTableTemplate = (args) => <BigDuoTable {...args}/>
const DuoTableTemplate = (args) => <DuoTable {...args}/>

export default {
    title: "DuoTable",
}

export const StoryBigDuoTable = BigDuoTableTemplate.bind({});
StoryBigDuoTable.args = {
    rankInfo: {
        "id": 4931,
        "rankChangeImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/RankSame.svg",
        "rankChangeNumber": 0,
        "rankNumber": 1,
        "rankNumberIcon": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/1.svg",
        "champion1": {
            "championName": "케인",
            "championImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Kayn.svg",
            "mainRuneImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/Conqueror.svg",
            "positionImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/JUNGLE.svg"
        },
        "champion2": {
            "championName": "미스 포츈",
            "championImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/MissFortune.svg",
            "mainRuneImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/PressTheAttack.svg",
            "positionImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/BOTTOM.svg"
        },
        "winRate": "68.53%"
    }
}

export const StoryDuoTable = DuoTableTemplate.bind({});
StoryDuoTable.args = {
    rankInfo: {
        "id": 4931,
        "rankChangeImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/RankSame.svg",
        "rankChangeNumber": 0,
        "rankNumber": 1,
        "rankNumberIcon": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/1.svg",
        "champion1": {
            "championName": "케인",
            "championImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Kayn.svg",
            "mainRuneImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/Conqueror.svg",
            "positionImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/JUNGLE.svg"
        },
        "champion2": {
            "championName": "미스 포츈",
            "championImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/MissFortune.svg",
            "mainRuneImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/PressTheAttack.svg",
            "positionImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/BOTTOM.svg"
        },
        "winRate": "68.53%"
    }
}
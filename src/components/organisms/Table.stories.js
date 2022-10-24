import React from 'react';
import {DuoTable, SoloTable} from "./Table";

export default {
    title: "Table",
}

const SoloTableTemplate = (args) => <SoloTable {...args}/>
const DuoTableTemplate = (args) => <DuoTable {...args}/>

export const StorySoloTable = SoloTableTemplate.bind({});
StorySoloTable.args = {
    tableInfo: {
        colgroup: ["150px", "238px", "288px"],
        header: ["Rank", "Champion", "Win Rate"],
        bodyInfo:
            [
                {
                    rankNumber: 1,
                    winRate: "50%",
                    positionImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/MIDDLE.svg",
                    championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Rammus.svg",
                    mainRuneImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/Conqueror.svg",
                    championName: "람머스",
                }
            ]
    }
}

export const StoryDuoTable = DuoTableTemplate.bind({});
StoryDuoTable.args = {
    tableInfo: {
        colgroup: ["676px"],
        header: ["Rank"],
        bodyInfo:
            [
                {
                    id: 4931,
                    rankChangeImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/RankSame.svg",
                    rankChangeNumber: "",
                    rankChangeColor: "",
                    rankNumber: 1,
                    rankNumberIcon: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/icon/rankChangeIcon.svg",
                    rankNumberColor: "C8AA6E",
                    champion1: {
                        championName: "미스 포츈",
                        championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/MissFortune.svg",
                        mainRuneImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/PressTheAttack.svg",
                        positionImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/BOTTOM.svg",
                    },
                    champion2: {
                        championName: "케인",
                        championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Kayn.svg",
                        mainRuneImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/Conqueror.svg",
                        positionImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/JUNGLE.svg",
                    },
                    listImage: "",
                    winRate: "68.53%"
                }
            ]
    }
}
import React from 'react';
import {SoloTable} from "./Table";

export default {
    title: "Table",
}

const SoloTableTemplate = (args) => <SoloTable {...args}/>

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
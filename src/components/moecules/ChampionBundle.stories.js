import React from 'react';
import {DuoChampionBundle, DuoChampionTopBundle} from "./ChampionBundle";

const DuoChampionBundleTemplate = (args) => <DuoChampionBundle {...args}/>
const DuoChampionTopBundleTemplate = (args) => <DuoChampionTopBundle {...args}/>

export default {
    title: "ChampionBundle",
}

export const StoryDuoChampionBundle = DuoChampionBundleTemplate.bind({});
StoryDuoChampionBundle.args = {
    championInfo: {
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
}

export const StoryDuoChampionTopBundle = DuoChampionTopBundleTemplate.bind({});
StoryDuoChampionTopBundle.args = {
    championInfo: {
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
}
import React from 'react';
import {DetailRank} from "./DetailRank";
import {DuoTable} from "./DuoTable";

export default {
    title: "DetailRank",
}

const DetailRankTemplate = (args) => <DetailRank {...args}/>
const DuoTableTemplate = (args) => <DuoTable {...args}/>

export const StorySoloDetail = DetailRankTemplate.bind({});
StorySoloDetail.args = {
    detailRankWinRate: {
        rankNumber: 1,
        winRate: "70.1%"
    }
}

export const StoryDuoDetail = DuoTableTemplate.bind({});
StoryDuoDetail.args = {
    detailInfo: {
        detailSpell: {
            firstSpell: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/spell/SummonerFlash.png",
            secondSpell: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/spell/SummonerExhaust.png"
        },
        detailRune: {
            mainRuneImgUrl: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Precision/Precision.svg",
            subRuneImgUrl: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/Domination.svg",
            mainRuneList1: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/main/DisabledPressTheAttack.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/main/LethalTempo.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/main/DisabledFleetFootwork.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/main/DisabledConqueror.svg"
            ],
            mainRuneList2: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Precision/1/Overheal.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Precision/1/PresenceofMind.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Precision/1/Triumph.svg"
            ],
            mainRuneList3: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Precision/2/Alarcrity.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Precision/2/Tenacity.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Precision/2/Bloodline.svg"
            ],
            mainRuneList4: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Precision/3/CoupdeGrace.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Precision/3/CutDown.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Precision/3/LastStand.svg"
            ],
            subRuneList1: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/1/CheapShot.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/1/TasteofBlood.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/1/SuddenImpact.svg"
            ],
            subRuneList2: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/2/ZombieWard.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/2/GhostPoro.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/2/EyeballCollection.svg"
            ],
            subRuneList3: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/3/TreausreHunter.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/3/IngeniousHunter.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/3/RelentlessHunter.svg",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/Rune/Domination/3/UltimateHunter.svg"
            ]
        },
        detailItem: {
            "firstItem": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/3068.png",
            "secondItem": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/3065.png",
            "thirdItem": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/3075.png"
        }
    }
}
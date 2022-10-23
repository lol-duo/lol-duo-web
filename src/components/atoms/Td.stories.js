import React from "react";
import {SoloTdChampion, SoloTdRank, SoloTdRate} from "./Td";
import {Champion} from "../moecules/Champion";

const SoloTdRankTemplate = (args) => <SoloTdRank {...args} />
const SoloTdChampionTemplate = (args) => <SoloTdChampion {...args} />
const SoloTdRateTemplate = (args) => <SoloTdRate {...args} />

export default {
    title: "Td",
}

export const StorySoloTdRank = SoloTdRankTemplate.bind({});
StorySoloTdRank.args = {
    children: "1"
}

export const StorySoloTdChampion = SoloTdChampionTemplate.bind({});
StorySoloTdChampion.args = {
    children: <Champion championInfo={
        {
            championInfo: {
                champion: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Rammus.svg",
                rune: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/Conqueror.svg",
                line: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/MIDDLE.svg",
            }
        }
    }/>
}

export const StorySoloTdRate = SoloTdRateTemplate.bind({});
StorySoloTdRate.args = {}
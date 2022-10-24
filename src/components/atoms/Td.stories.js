import React from "react";
import {DuoTdRank, SoloTdRank, SoloTdRate} from "./Td";

const SoloTdRankTemplate = (args) => <SoloTdRank {...args} />
const SoloTdRateTemplate = (args) => <SoloTdRate {...args} />
const DuoTdRankTemplate = (args) => <DuoTdRank {...args} />

export default {
    title: "Td",
}

export const StorySoloTdRank = SoloTdRankTemplate.bind({});
StorySoloTdRank.args = {
    children: "1"
}

export const StorySoloTdRate = SoloTdRateTemplate.bind({});
StorySoloTdRate.args = {
    children: "50.00%"
}

export const StoryDuoTdRank = DuoTdRankTemplate.bind({});
StoryDuoTdRank.args = {
    rank: 4,
}
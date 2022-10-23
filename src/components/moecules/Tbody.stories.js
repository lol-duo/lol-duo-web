import React from 'react';
import {SoloTbody} from "./Tbody";

export default {
    title: "Tbody",
}

const SoloTbodyTemplate = (args) => <SoloTbody {...args}/>

export const StorySoloTbody = SoloTbodyTemplate.bind({});
StorySoloTbody.args = {
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

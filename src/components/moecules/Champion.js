/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {LineImage, RuneImage, SoloChampionImage} from "../atoms/Image";
import fontList from "../../assets/fontList";
import colorList from "../../assets/colorList";

const champion = {
    solo: css({
        position: "relative",
        height: '46px',
        width: '70px',
    }),

    champion: {
        left: "22px",
        top: "0px",

    },
    rune: {
        left: "0px",
        top: "13px",
    },
    line: {
        left: "50px",
        top: "26px",
    },
    name: css({
        position: "absolute",
        left: "94px",
        top: "16px",

        ...fontList.roboto.bold["12"],
        color: colorList.grayscale["000"],
        whiteSpace: "nowrap",
    }),
}

export function SoloChampion({championInfo}) {
    return <div css={champion.solo}>
        <SoloChampionImage newCss={champion.champion} src={championInfo.champion}/>
        <RuneImage newCss={champion.rune} src={championInfo.rune}/>
        <LineImage newCss={champion.line} src={championInfo.line}/>
        <div css={champion.name}>{championInfo.name}</div>
    </div>;
}
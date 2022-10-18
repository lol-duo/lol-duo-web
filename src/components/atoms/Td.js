/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";
import fontList from "../../assets/fontList";

const td = {
    soloRank: css({
        ...fontList.roboto.bold["12"],
        color: colorList.secondary.beige,
        padding: "10px 12px",
    }),

    soloChampion: css({
        padding: "0px 12px",
    }),

    soloRate: css({
        padding: "10px 12px",
        ...fontList.roboto.regular["12"],
        color: colorList.grayscale["000"],
    }),
}

export function SoloTdRank({children}) {
    return <td css={td.soloRank}>{children}</td>;
}

export function SoloTdChampion({children}) {
    return <td css={td.soloChampion}>{children}</td>;
}

export function SoloTdRate({children}) {
    return <td css={td.soloRate}>{children}</td>;
}
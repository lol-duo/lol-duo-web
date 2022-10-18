/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {SoloChampion} from "./Champion";
import {SoloTdChampion, SoloTdRank, SoloTdRate} from "../atoms/Td";
import colorList from "../../assets/colorList";

const tbody = {
    solo: css({}),
}

const tr = {
    solo: css({
        background: colorList.semantic.card,
    }),
}

export function SoloTbody({bodyInfo}) {
    return (
        <tbody css={tbody.solo}>
        {bodyInfo.map((body) => {
            let champInfo = {
                line: body.positionImgUrl,
                champion: body.championImgUrl,
                rune: body.mainRuneImgUrl,
                name: body.championName,
            }
            return (
                <tr css={tr.solo}>
                    <SoloTdRank>{body.rankNumber}</SoloTdRank>
                    <SoloTdChampion><SoloChampion championInfo={champInfo}/></SoloTdChampion>
                    <SoloTdRate>{body.winRate}</SoloTdRate>
                </tr>
            )
        })}
        </tbody>);
}
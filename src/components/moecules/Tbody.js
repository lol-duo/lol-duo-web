/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Champion, SoloChampion} from "./Champion";
import {SoloTdRank, SoloTdRate} from "../atoms/Td";
import colorList from "../../assets/colorList";

const soloTbody = {
    soloChampion: {
        position: "relative",
    }
}

export function SoloTbody({bodyInfo, newCss = {}}) {
    return (
        <tbody css={css({
            position: "relative",
        })}>
        {bodyInfo ? bodyInfo.map((body) => {
            let champInfo = {
                line: body.positionImgUrl,
                champion: body.championImgUrl,
                rune: body.mainRuneImgUrl,
            }
            return (
                <tr css={
                    css({
                        background: colorList.semantic.card,
                        ":hover": {
                            background: colorList.semantic.hover,
                        },
                        ...newCss
                    })
                }>
                    <SoloTdRank>{body.rankNumber}</SoloTdRank>
                    <SoloChampion name={body.championName} newCss={soloTbody.soloChampion}><Champion
                        championInfo={champInfo}/></SoloChampion>
                    <SoloTdRate>{body.winRate}</SoloTdRate>
                </tr>
            )
        }) : null}
        </tbody>);
}
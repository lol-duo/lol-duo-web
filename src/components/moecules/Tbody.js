/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {SoloChampion} from "./Champion";
import {DuoTdRank, SoloTdRank, SoloTdRate} from "../atoms/Td";
import colorList from "../../assets/colorList";
import {DuoChampionBundle} from "./ChampionBundle";

const soloTbody = {
    soloChampion: {
        position: "relative",
    },
    duoChampion: {
        left: "115px",
        top: "3px",
    }
}

export function DuoTbody({bodyInfo, newCss = {}}) {
    return (
        <tbody css={css({
            position: "relative",
            ...newCss
        })}>
        {
            bodyInfo ? bodyInfo.map((body) => {
                return (
                    <tr css={
                        css({
                            background: colorList.semantic.card,
                            width: "676px",
                            ":hover": {
                                background: colorList.semantic.hover,
                            },
                            ...newCss
                        })
                    }>
                        <div css={css({
                            width: "676px",
                            position: "relative",
                        })}>
                            <DuoTdRank rank={body.rankNumber}/>
                            <td><DuoChampionBundle newCss={soloTbody.duoChampion} championInfo={body}/></td>
                        </div>
                    </tr>
                )
            }) : null
        }
        </tbody>
    )
}

export function SoloTbody({bodyInfo, newCss = {}}) {
    return (
        <tbody css={css({
            position: "relative",
        })}>
        {bodyInfo ? bodyInfo.map((body) => {
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
                    <SoloChampion name={body.championName} newCss={soloTbody.soloChampion} championInfo={body}/>
                    <SoloTdRate>{body.winRate}</SoloTdRate>
                </tr>
            )
        }) : null}
        </tbody>);
}
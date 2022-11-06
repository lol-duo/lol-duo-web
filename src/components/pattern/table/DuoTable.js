/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import {RankBadge} from "../../foundation/icon1/default/RankBadge";
import {RankUpIcon} from "../../foundation/icon1/default/Icon";
import {RankChangeNumber, RankTable} from "./SoloTable";
import {Champion} from "../../atoms/table_atoms/Champion";
import colorList from "../../../assets/colorList";
import fontList from "../../../assets/fontList";
import {DonutChart} from "../../foundation/chart/DonutChart";

const cssList = {
    table: {
        width: "676px",
        height: "76px",
        background: colorList.semantic.card,
        ":hover": {
            background: colorList.semantic.hover,
        },
    },
    bigMain: {
        position: "relative",
        width: "676px",
        height: "210px",
        backgroundColor: colorList.semantic.card,
        ":hover": {
            backgroundColor: colorList.semantic.hover,
        }
    },
    bigSub: {
        position: "relative",
        width: "336px",
        height: "210px",
        backgroundColor: colorList.semantic.card,
        ":hover": {
            backgroundColor: colorList.semantic.hover,
        }
    },
    champion: {
        width: "300px",
        height: "86px",
        top: "92px",
        display: "flex",
        flexDirection: "row",
        gap: "21px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        alineItems: "center",
    },
    rank: {
        width: "40px",
        height: "52px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: "32px",

    },
    border: {
        width: "20px",
        height: "1px",
    },
    winRate: {
        ...fontList.roboto.regular["12"],
        color: colorList.grayscale["000"],
        height: "14px",
        width: "41px",
    }

}

export function BigDuoTable({newCss = {}, rankInfo}) {
    const background = rankInfo.rankNumber === 1 ? cssList.bigMain : cssList.bigSub;
    return (
        <div css={css({
            ...background,
            ...newCss
        })}>
            <div css={css({
                ...cssList.rank,
            })}>
                <RankBadge rank={rankInfo.rankNumber} newCss={{
                    position: "absolute",
                    left: "4px",
                    top: "0px",
                }}/>
                <RankUpIcon newCss={{
                    position: "absolute",
                    left: "0px",
                    bottom: "0px",
                }} rankChangeNumber={rankInfo.rankChangeNumber}/>
                <RankChangeNumber newCss={{
                    position: "absolute",
                    left: "20px",
                    bottom: "1.5px"
                }} rankChangeNumber={rankInfo.rankChangeNumber}/>
            </div>
            <div css={css({
                ...cssList.champion,
            })}>
                <Champion isSolo={false} championInfo={rankInfo.champion1} size="big"/>
                <DonutChart size="60px" color="#466CD2" percent={0.6512}/>
                <Champion isSolo={false} championInfo={rankInfo.champion2} size="big"/>
            </div>

        </div>
    )
}

export function DuoTable({rankInfo, newCss = {}}) {
    return (
        <div css={css({
            ...cssList.table,
            position: "relative",
            ...newCss
        })}>
            <RankTable RankInfo={rankInfo} newCss={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
            }}/>
            <Champion isSolo={false} championInfo={rankInfo.champion1} size="small" newCss={{
                position: "absolute",
                top: "7px",
                left: "187px",
            }}/>
            <img css={css({
                ...cssList.border,
                position: "absolute",
                left: "282px",
                top: "38px",
            })} src="https://d2d4ci5rabfoyr.cloudfront.net/mainPage/icon/listImage.png"
                 alt="https://d2d4ci5rabfoyr.cloudfront.net/mainPage/icon/listImage.png"/>
            <div css={css({
                ...cssList.winRate,
                position: "absolute",
                top: "31px",
                left: "50%",
                transform: "translateX(-50%)",
            })}>{rankInfo.winRate}</div>
            <img css={css({
                ...cssList.border,
                position: "absolute",
                left: "374px",
                top: "38px",
            })} src="https://d2d4ci5rabfoyr.cloudfront.net/mainPage/icon/listImage.png"
                 alt="https://d2d4ci5rabfoyr.cloudfront.net/mainPage/icon/listImage.png"/>
            <Champion isSolo={false} championInfo={rankInfo.champion1} size="small" newCss={{
                position: "absolute",
                top: "7px",
                left: "402px",
            }}/>
        </div>
    )
}
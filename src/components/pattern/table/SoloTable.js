/** @jsxImportSource @emotion/react */
import fontList from "../../../assets/fontList";
import colorList from "../../../assets/colorList";
import {css} from "@emotion/react";
import {RankUpIcon} from "../../foundation/icon1/default/Icon";
import {Champion} from "../../atoms/table_atoms/Champion";

const cssList = {
    table: {
        width: "676px",
        height: "54px",
        background: colorList.semantic.card,
        ":hover": {
            background: colorList.semantic.hover,
        },
    },
    rank: {
        background: {
            width: "150px",
            height: "46px",
        },
        number: {
            width: "16px",
            height: "14px",
        }
    },
    rankChangeNumberCss: {
        height: "13px",
        width: "20px",
        ...fontList.roboto.regular["11"]
    },
    winRate: {
        ...fontList.roboto.regular["12"],
        color: colorList.grayscale["000"],
        height: "14px",
        width: "41px",
    }
}

export function RankChangeNumber({rankChangeNumber, newCss = {}}) {
    let color = rankChangeNumber >= 0 ? colorList.count.downRed : colorList.count.upGreen;
    return (
        rankChangeNumber === 0 ?
            <div css={css({...cssList.rankChangeNumberCss, ...newCss})}/> :
            <div css={css({...cssList.rankChangeNumberCss, color: color, ...newCss})}>{
                rankChangeNumber > 0 ? "+" + rankChangeNumber : rankChangeNumber
            }</div>
    )
}

export function RankTable({RankInfo, newCss = {}}) {
    let font = RankInfo.rankNumber >= 4 ? fontList.roboto.regular["12"] : fontList.roboto.bold["12"];
    let rankColor = RankInfo.rankNumber >= 4 ? colorList.grayscale["050"] : colorList.secondary.beige;

    return (
        <div css={css({
            ...cssList.rank.background,
            ...newCss
        })}>
            <div
                css={css({
                    position: "absolute",
                    left: "12px",
                    top: "16px",
                    ...font,
                    color: rankColor,
                    ...cssList.rank.number

                })}>
                {RankInfo.rankNumber}
            </div>
            <div>
                <RankUpIcon newCss={{
                    position: "absolute",
                    left: "36px",
                    top: "15px",
                }} rankChangeNumber={RankInfo.rankChangeNumber}/>
                <RankChangeNumber newCss={{
                    position: "absolute",
                    left: "56px",
                    top: "17.5px"
                }} rankChangeNumber={RankInfo.rankChangeNumber}/>
            </div>
        </div>
    )
}

export function SoloTable({championInfo, newCss = {}}) {
    return (
        <div css={css({
            ...cssList.table,
            position: "relative",

            ...newCss
        })}>
            <RankTable RankInfo={championInfo} newCss={{
                position: "absolute",
                top: "4px",
                left: "0px",
            }}/>
            <Champion championInfo={championInfo} isSolo={true} size="small" newCss={{
                position: "absolute",
                top: "4px",
                left: "162px",
            }}/>
            <div css={css({
                ...cssList.winRate,
                position: "absolute",
                top: "20px",
                left: "400px",
            })}>{championInfo.winRate}</div>
        </div>
    )
}

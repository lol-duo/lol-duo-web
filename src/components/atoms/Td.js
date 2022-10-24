/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";
import fontList from "../../assets/fontList";

const td = {
    duoTdRank: {
        soloTdRank: {
            position: "absolute",
            top: "17px",
            left: "12px",
        }
    }
}

export function DuoTdRank({rank, newCss = {}}) {
    return (
        <td css={css({
            boxSizing: "border-box",
            height: "68px",
            width: "88px",
            left: "0px",
            top: "4px",
            padding: "10px 12px 10px 12px",
            gap: "10px",
            ...newCss
        })}>
            <SoloTdRank newCss={td.duoTdRank.soloTdRank}>{rank}</SoloTdRank>
        </td>
    )
}


export function SoloTdRank({children, newCss = {}}) {
    let font = children >= 4 ? fontList.roboto.regular["12"] : fontList.roboto.bold["12"];
    let color = children >= 4 ? colorList.grayscale["050"] : colorList.secondary.beige;
    return (
        <td
            css={css({
                ...font,
                color: color,
                padding: "10px 12px",
                ...newCss
            })}
        >
            {children}
        </td>
    )
}

export function SoloTdRate({children, newCss = {}}) {
    return (
        <td
            css={css({
                padding: "10px 12px",
                ...fontList.roboto.regular["12"],
                color: colorList.grayscale["000"],
                ...newCss
            })}
        >
            {children}
        </td>)
}

export function DuoTdRate({rate, newCss = {}}) {
    return (
        <td
            css={css({
                width: "64px",
                height: "14px",
                textAlign: "center",
                ...fontList.roboto.regular["12"],
                color: colorList.grayscale["000"],
                ...newCss
            })}
        >
            {rate}
        </td>)
}
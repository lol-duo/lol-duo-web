/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";
import fontList from "../../assets/fontList";

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

export function SoloTdChampion({children, newCss = {}}) {
    return (
        <td
            css={css({
                padding: "0px 12px",
                ...newCss
            })}
        >
            {children}
        </td>)
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
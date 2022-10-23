/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import fontList from "../../assets/fontList";
import colorList from "../../assets/colorList";

export function RiotText({newCss = {}}) {
    return (
        <div css={css({

            ...fontList.roboto.regular["11"],
            color: colorList.grayscale["200"],
            width: "579px",
            height: "64px",
            ...newCss
        })}>
            © 2022 lolduo.net isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or
            anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
            trademarks or registered trademarks of Riot Games, Inc. League of Legends
            © Riot Games, Inc
        </div>
    )
}

export function SoloChampionText({children, newCss = {}}) {
    return (
        <div css={css({
            ...fontList.roboto.bold["12"],
            color: colorList.grayscale["000"],
            width: "82px",
            height: "14px",
            ...newCss
        })}>
            {children}
        </div>
    )
}
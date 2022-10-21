/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import fontList from "../../assets/fontList";
import colorList from "../../assets/colorList";

const text = {
    riot: css({
        ...fontList.roboto.regular["11"],
        color: colorList.grayscale["200"],
        position: "absolute",
        width: "579px",
        height: "64px",
        top: "40px",
    }),
}

export function RiotText() {
    return (
        <div css={text.riot}>
            © 2022 lolduo.net isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or
            anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
            trademarks or registered trademarks of Riot Games, Inc. League of Legends
            © Riot Games, Inc
        </div>
    )
}
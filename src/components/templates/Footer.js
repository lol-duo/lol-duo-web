/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import fontList from "../../assets/fontList";
import colorList from "../../assets/colorList";
import {Logo} from "../foundation/icon1/logo/Logo";

const cssList = {
    footer: {
        width: "1080px",
        height: "144px",
        padding: "40px 60px 0px",
    },
    riotText: {
        width: "579px",
        height: "64px",
        ...fontList.roboto.regular["11"],
        color: colorList.grayscale["200"],
    }
}

const riotText = "© 2022 lolduo.net isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends \n" +
    "© Riot Games, Inc";


export function MainFooter({newCss = {}}) {
    return (
        <div css={css({
            ...cssList.footer,
            position: "relative",
            top: "10px",
            ...newCss
        })}>
            <Logo status={"Dark"} newCss={{
                position: "absolute",
                top: "40px",
                left: "60px",
            }}/>
            <div css={css({
                ...cssList.riotText,
                position: "absolute",
                top: "80px",
                left: "60px",
            })}>{riotText}</div>
        </div>
    )
}
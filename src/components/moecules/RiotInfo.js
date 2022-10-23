/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {RiotText} from "../atoms/Text";
import {DarkLogoBundle} from "./LogoBundle";

const riotInfo = {
    text: {
        position: "absolute",
        top: "40px"
    },

}

export function RiotInfo({newCss = {}}) {
    return (
        <div css={
            css({
                position: "relative",
                width: "579px",
                height: "104px",
                ...newCss
            })
        }>
            <DarkLogoBundle/>
            <RiotText newCss={riotInfo.text}/>
        </div>
    )
}
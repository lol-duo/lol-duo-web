/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {RiotText} from "../atoms/Text";
import {DarkLogoBundle} from "./LogoBundle";

const riot = {
    info: css({
        position: "absolute",
        
    }),
}

export function RiotInfo() {
    return (
        <div css={riot.info}>
            <DarkLogoBundle/>
            <RiotText/>
        </div>
    )
}
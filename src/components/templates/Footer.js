/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {RiotInfo} from "../moecules/RiotInfo";


export function MainFooter({newCss = {}}) {
    return (
        <footer css={css({
            width: "1080px",
            height: "144px",
            padding: "40px 60px 0px",
            ...newCss
        })}>
            <RiotInfo/>
        </footer>
    )
}
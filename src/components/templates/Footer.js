/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {RiotInfo} from "../moecules/RiotInfo";

const footer = {
    main: css({
        width: "1080px",
        height: "144px",
        padding: "40px 60px 0px",
    }),
}

export function MainFooter() {
    return (
        <footer css={footer.main}>
            <RiotInfo/>
        </footer>
    )
}
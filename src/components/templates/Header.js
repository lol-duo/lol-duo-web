/** @jsxImportSource @emotion/react */
import {Gnb, GnbLogo} from "../organisms/Gnb";
import {css} from "@emotion/react";

export function MainHeader() {

    return (
        <div css={css({
            position: "fixed",
            width: "100%",
            zIndex: "100",
        })}>
            <GnbLogo/>
            <Gnb>{["Duo", "Solo"]}</Gnb>
        </div>
    );
}

/** @jsxImportSource @emotion/react */
import {Gnb, GnbLogo} from "../organisms/Gnb";
import {css} from "@emotion/react";

export function MainHeader({newCss = {}}) {

    return (
        <div css={css({
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            zIndex: "100",
            ...newCss
        })}>
            <GnbLogo/>
            <Gnb>{["Duo", "Solo"]}</Gnb>
        </div>
    );
}

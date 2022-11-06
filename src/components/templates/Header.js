/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Gnb, GnbLogo} from "../pattern/default_option/Gnb";

export function MainHeader({newCss = {}}) {

    return (
        <div css={css({
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            zIndex: "10000",
            ...newCss
        })}>
            <GnbLogo/>
            <Gnb/>
        </div>
    );
}

/** @jsxImportSource @emotion/react */
import {Gnb, GnbLogo} from "../organisms/Gnb";
import {css} from "@emotion/react";

const header = {
    main: css({}),
};

export function MainHeader() {

    return (
        <div css={header.main}>
            <GnbLogo/>
            <Gnb>{["Duo", "Solo"]}</Gnb>
        </div>
    );
}

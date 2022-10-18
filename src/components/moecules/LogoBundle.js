/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {LightLogo, LightName} from "../atoms/Logo";

const bundle = {
    lightLogoBundle: css({
        width: "164.8px",
        height: "32px",
        position: "relative",
        top: "25%",
    }),
};

export function LightLogoBundle() {
    return (
        <div css={bundle.lightLogoBundle}>
            <LightLogo/>
            <LightName/>
        </div>
    );
}

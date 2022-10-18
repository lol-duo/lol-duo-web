/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {DarkLogo, LightLogo, LightName} from "../atoms/Logo";

const bundle = {
    lightLogoBundle: css({
        width: "164.8px",
        height: "32px",
        position: "relative",
        top: "25%",
    }),
    darkLogoBundle: css({
        width: "164.8px",
        height: "32px",
    }),
};

export function DarkLogoBundle() {
    return (
        <div css={bundle.darkLogoBundle}>
            <DarkLogo/>
            <LightName/>
        </div>
    );
}

export function LightLogoBundle() {
    return (
        <div css={bundle.lightLogoBundle}>
            <LightLogo/>
            <LightName/>
        </div>
    );
}

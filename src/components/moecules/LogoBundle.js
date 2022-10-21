/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {DarkLogo, LightLogo, LightName} from "../atoms/Logo";

const bundle = {
    darkLogo: {
        position: "absolute",
        top: "1.6px",
        left: "38.4px",
    },
};


export function DarkLogoBundle({newCss = {}}) {
    return (
        <div css={
            css({
                width: "164.8px",
                height: "32px",
                ...newCss
            })
        }>
            <DarkLogo/>
            <LightName newCss={bundle.darkLogo}/>
        </div>
    );
}

export function LightLogoBundle({newCss = {}}) {
    return (
        <div css={
            css({
                width: "164.8px",
                height: "32px",
                position: "relative",
                top: "25%",
                ...newCss
            })
        }>
            <LightLogo/>
            <LightName newCss={bundle.darkLogo}/>
        </div>
    );
}

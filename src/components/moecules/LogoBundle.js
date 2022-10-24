/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {DarkLogo, LightLogo, LightName} from "../atoms/StaticImage";

const bundle = {
    name: {
        position: "relative",
        left: "6.4px",
        bottom: "3.2px",
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
            <LightName newCss={bundle.name}/>
        </div>
    );
}

export function LightLogoBundle({newCss = {}}) {
    return (
        <div css={
            css({
                width: "164.8px",
                height: "32px",
                ...newCss
            })
        }>
            <LightLogo/>
            <LightName newCss={bundle.name}/>
        </div>
    );
}

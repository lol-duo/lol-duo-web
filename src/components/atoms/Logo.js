/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const logo = {
    logo: css({
        height: "32px",
        width: "32px",
    }),

    name: css({
        height: "27.2px",
        width: "125.12px",
        position: "absolute",
        top: "1.6px",
        left: "38.4px",
    }),
};

export function DarkLogo() {
    return (
        <img
            css={logo.logo}
            src="https://d2d4ci5rabfoyr.cloudfront.net/logo/Group_Gray.svg"
            alt="https://d2d4ci5rabfoyr.cloudfront.net/logo/Group_Gray.svg"
        />
    );
}

export function LightLogo() {
    return (
        <img
            css={logo.logo}
            src="https://d2d4ci5rabfoyr.cloudfront.net/logo/Group.svg"
            alt="https://d2d4ci5rabfoyr.cloudfront.net/logo/Group.svg"
        />
    );
}

export function LightName() {
    return (
        <img
            css={logo.name}
            src="https://d2d4ci5rabfoyr.cloudfront.net/logo/Frame.svg"
            alt="https://d2d4ci5rabfoyr.cloudfront.net/logo/Frame.svg"
        />
    );
}

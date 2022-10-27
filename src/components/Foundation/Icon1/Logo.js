/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const logo = {
    css: {
        height: "32px",
        weight: "164.8px"
    },
    lightLogo: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/Lightmode.svg",
    darkLogo: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/Darkmode.svg"
}

export function Logo({status, newCss = {}}) {
    return status === "Light" ?
        <img css={css({
            ...logo.css,
            ...newCss
        })} src={logo.lightLogo} alt={logo.lightLogo}/> :
        <img css={css({
            ...logo.css,
            ...newCss
        })} src={logo.darkLogo} alt={logo.darkLogo}/>
}
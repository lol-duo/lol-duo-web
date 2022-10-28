/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const cssList = {
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
            ...cssList.css,
            ...newCss
        })} src={cssList.lightLogo} alt={cssList.lightLogo}/> :
        <img css={css({
            ...cssList.css,
            ...newCss
        })} src={cssList.darkLogo} alt={cssList.darkLogo}/>
}
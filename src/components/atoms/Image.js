/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export function BigChampionImage({src, newCss = {}}) {
    return <img css={css({
        position: "absolute",
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        ...newCss
    })} src={src} alt="https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Rammus.svg"/>;
}

export function SoloChampionImage({src, newCss = {}}) {
    return <img css={
        css({
            position: 'absolute',
            height: '40px',
            width: '40px',
            borderRadius: "50%",
            ...newCss
        })
    } src={src} alt="https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Rammus.svg"/>;
}

export function RuneImage({src, newCss = {}}) {
    return <img css={
        css({
            position: 'absolute',
            height: '20px',
            width: '20px',
            ...newCss
        })
    } src={src} alt="https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/Conqueror.svg"/>;
}

export function LineImage({src, newCss = {}}) {
    return <img css={
        css({
            position: 'absolute',
            height: '20px',
            width: '20px',
            ...newCss
        })
    } src={src} alt="https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/MIDDLE.svg"/>;
}
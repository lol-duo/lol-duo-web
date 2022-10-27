/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const searchBarPositionCss = {
    height: "24px",
    width: "24px",
}

const lineImg = {
    ALL: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/ALL.svg",
    TOP: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/TOP.svg",
    JUNGLE: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/JUNGLE.svg",
    MIDDLE: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/MIDDLE.svg",
    BOTTOM: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/BOTTOM.svg",
    SUPPORT: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/UTILITY.svg",
}

export function SearchBarPosition({newCss = {}, position}) {
    return <img css={css({
        ...searchBarPositionCss,
        ...newCss
    })} src={lineImg[position]} alt={lineImg[position]}/>
}
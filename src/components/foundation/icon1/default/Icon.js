/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";

const iconCss = {
    weight: "16px",
    height: "16px",
}

const imageList = {
    searchGlass: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/searchGlass.svg",
    rankUp: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/rankChange/RankUp.svg",
    rankDown: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/rankChange/RankDown.svg",
    rankSame: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/rankChange/RankSame.svg"
}

export function SearchGlassIcon({newCss = {}}) {
    return <img css={css({
        ...iconCss,
        ...newCss
    })} src={imageList.searchGlass} alt={imageList.searchGlass}/>;
}

export function RankUpIcon({rankChangeNumber, newCss = {}}) {
    let src = rankChangeNumber === 0 ? imageList.rankSame
        : rankChangeNumber > 0 ? imageList.rankUp : imageList.rankDown;
    return <img css={css({
        ...iconCss,
        ...newCss
    })} src={src} alt={src}/>;
}
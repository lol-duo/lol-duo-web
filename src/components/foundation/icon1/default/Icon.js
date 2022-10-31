/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";

const iconCss = {
    weight: "16px",
    height: "16px",
}

const imageList = {
    searchGlass: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/searchGlass.svg",
}

export function SearchGlassIcon({newCss = {}}) {
    return <img css={css({
        ...iconCss,
        ...newCss
    })} src={imageList.searchGlass} alt={imageList.searchGlass}/>;
}
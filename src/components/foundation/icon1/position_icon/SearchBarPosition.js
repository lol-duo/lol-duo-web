/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import assets from "../../../../assets/assets";

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
    let imgSrc = lineImg["ALL"];
    switch (position) {
        case assets.position.all:
            imgSrc = lineImg["ALL"];
            break;
        case assets.position.top:
            imgSrc = lineImg["TOP"];
            break;
        case assets.position.jungle:
            imgSrc = lineImg["JUNGLE"];
            break;
        case assets.position.middle:
            imgSrc = lineImg["MIDDLE"];
            break;
        case assets.position.bottom:
            imgSrc = lineImg["BOTTOM"];
            break;
        case assets.position.support:
            imgSrc = lineImg["SUPPORT"];
    }
    return <img css={css({
        ...searchBarPositionCss,
        ...newCss
    })} src={imgSrc} alt={imgSrc}/>
}
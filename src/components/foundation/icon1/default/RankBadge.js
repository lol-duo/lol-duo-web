/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";

const badgeCss = {
    width: "32px",
    height: "32px",
}

const RankBadgeList = {
    first: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/1.svg",
    second: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/2.svg",
    third: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/3.svg",
    fourth: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/4.svg",
}

export function RankBadge({newCss = {}, rank}) {
    let nowRank;
    switch (rank) {
        case 1:
            nowRank = "first";
            break;
        case 2:
            nowRank = "second";
            break;
        case 3:
            nowRank = "third";
            break;
        default:
            nowRank = "fourth";
            break;
    }
    return (
        <img css={css({
            ...badgeCss,
            ...newCss
        })} src={RankBadgeList[nowRank]} alt={RankBadgeList[nowRank]}/>
    )
}
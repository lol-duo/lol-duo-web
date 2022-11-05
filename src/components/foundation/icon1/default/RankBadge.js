/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";

const badgeCss = {
    width: "32px",
    height: "32px",
}

const RankBadgeList = {
    first: "",
    second: "",
    third: "",
    fourth: "",
}

export function RankBadge({newCss = {}, rank}) {
    let nowRank = "first";
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
        case 4:
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
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../../assets/colorList";
import {RankBadge} from "../../foundation/icon1/default/RankBadge";
import fontList from "../../../assets/fontList";

export function DetailRank({newCss = {}, detailRankWinRate}) {
    return (
        <div css={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colorList.semantic.card,
            width: "82px",
            height: "364px",
            gap: "8px",
            ...newCss,
        })}>
            <RankBadge rank={detailRankWinRate.rankNumber}/>
            <div css={css({
                width: "60px",
                height: "14px",
                ...fontList.roboto.medium["12"],
                color: colorList.main.secondaryBeige,
                textAlign: "center",
            })}>{detailRankWinRate.winRate}</div>
        </div>
    )
}
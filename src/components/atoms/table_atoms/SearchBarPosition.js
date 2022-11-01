/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import {SearchBarPositionCircle} from "../../foundation/icon1/position_icon/SearchBarPositionCircle";
import colorList from "../../../assets/colorList";

const searchBarPositionCss = {
    boxSizing: "border-box",
    display: "flex",
    gap: "8px",
    width: "336px",
    height: "60px",
    padding: "8px 16px 8px 16px",
    borderRadius: "100px",
    backgroundColor: colorList.semantic.card,
}

const positionList = ["ALL", "TOP", "JUNGLE", "MIDDLE", "BOTTOM", "SUPPORT"]

export function SearchBarPosition({newCss = {}, selectedPosition}) {
    let newSearchBarPositionCircleCss = {
        backgroundColor: colorList.alpha.secondaryBeige_20,
    }

    return <div css={css({
        ...searchBarPositionCss,
        ...newCss
    })}>{positionList.map((position) => {
        return selectedPosition === position ?
            <SearchBarPositionCircle newCss={newSearchBarPositionCircleCss} position={position}/>
            : <SearchBarPositionCircle position={position}/>
    })}</div>
}
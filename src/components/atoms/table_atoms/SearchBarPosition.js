/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import {SearchBarPositionCircle} from "../../foundation/icon1/position_icon/SearchBarPositionCircle";
import colorList from "../../../assets/colorList";
import assets from "../../../assets/assets";

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

const positionList = assets.position;

const positionArray = [positionList.all, positionList.top, positionList.jungle, positionList.middle, positionList.bottom, positionList.support];

export function SearchBarPosition({
                                      newCss = {}, selectedPosition, setPosition = () => {
    }
                                  }) {
    let newSearchBarPositionCircleCss = {
        backgroundColor: colorList.alpha.secondaryBeige_20,
    }

    return <div css={css({
        ...searchBarPositionCss,
        ...newCss
    })}>{positionArray.map((position) => {
        return selectedPosition === position ?
            <SearchBarPositionCircle key={position} onClick={() => setPosition(position)}
                                     newCss={newSearchBarPositionCircleCss}
                                     position={position}/>
            : <SearchBarPositionCircle key={position} onClick={() => setPosition(position)} position={position}/>
    })}</div>
}
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../../../assets/colorList";
import {SearchBarPosition} from "./SearchBarPosition";

const searchBarPositionCircleCss = {
    boxSizing: "border-box",
    width: "44px",
    height: "44px",
    backgroundColor: colorList.grayscale["400"],
    borderRadius: "50%",
    position: "relative",
    ":hover": {
        border: `1px solid ${colorList.grayscale["300"]}`,
    }
}

export function SearchBarPositionCircle({newCss = {}, position}) {
    return <div css={css({
        ...searchBarPositionCircleCss,
        ...newCss
    })}><SearchBarPosition newCss={
        {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }
    } position={position}/></div>
}
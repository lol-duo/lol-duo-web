/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";

export function SearchBar({newCss = {}}) {
    return (
        <div css={
            css({
                padding: "0px 32px",
                width: "474px",
                height: "76px",
                borderRadius: "100px",
                backgroundColor: colorList.semantic.card,
                ...newCss
            })
        }>
        </div>
    )
}
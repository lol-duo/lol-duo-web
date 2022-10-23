/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {SoloTable} from "../organisms/Table";
import colorList from "../../assets/colorList";

export function SoloMainBody({tableInfo, newCss = {}}) {

    return (
        <div css={css({
            color: colorList.semantic.background,
            ...newCss
        })}>
            <SoloTable tableInfo={tableInfo}/>
        </div>
    )
}
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {ColGroup, SoloThead} from "../moecules/Thead";
import {SoloTbody} from "../moecules/Tbody";


export function SoloTable({tableInfo, newCss = {}}) {
    return (
        <table css={css({
            position: "relative",
            left: "50%",
            top: "172px",
            transform: "translateX(-50%)",

            width: "676px",
            borderCollapse: "separate",
            borderSpacing: "0px 4px",
            ...newCss
        })}>
            <ColGroup>{tableInfo.colgroup}</ColGroup>
            <SoloThead>{tableInfo.header}</SoloThead>
            <SoloTbody bodyInfo={tableInfo.bodyInfo}/>
        </table>
    )
}
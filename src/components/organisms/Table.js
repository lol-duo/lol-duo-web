/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {ColGroup, MainThead} from "../moecules/Thead";
import {DuoTbody, SoloTbody} from "../moecules/Tbody";

export function DuoTable({tableInfo, newCss = {}}) {
    return (
        <table css={css({
            width: "676px",
            borderCollapse: "separate",
            borderSpacing: "0px 4px",
            ...newCss
        })}>
            <ColGroup>{tableInfo.colgroup}</ColGroup>
            <MainThead>{tableInfo.header}</MainThead>
            <DuoTbody bodyInfo={tableInfo.bodyInfo}/>
        </table>
    )
}


export function SoloTable({tableInfo, newCss = {}}) {
    return (
        <table css={css({
            width: "676px",
            borderCollapse: "separate",
            borderSpacing: "0px 4px",
            ...newCss
        })}>
            <ColGroup>{tableInfo.colgroup}</ColGroup>
            <MainThead>{tableInfo.header}</MainThead>
            <SoloTbody bodyInfo={tableInfo.bodyInfo}/>
        </table>
    )
}
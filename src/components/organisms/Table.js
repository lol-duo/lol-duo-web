/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {SoloThead} from "../moecules/Thead";
import {SoloTbody} from "../moecules/Tbody";

const table = {
    solo: css({
        position: "absolute",
        left: "201px",
        top: "278px",

        width: "676px",
        borderCollapse: "separate",
        borderSpacing: "0px 4px",
        overflow: "hidden",
    }),
}

function createColGroup({list}) {
    return (
        <colgroup>
            {
                list.map((width) => {
                    return <col width={width}/>
                })
            }
        </colgroup>
    )
}

export function SoloTable({tableInfo}) {
    return (
        <table css={table.solo}>
            {createColGroup({list: ["150px", "238px", "288px"]})}
            <SoloThead>{tableInfo.header}</SoloThead>
            <SoloTbody bodyInfo={tableInfo.body}/>
        </table>
    )
}
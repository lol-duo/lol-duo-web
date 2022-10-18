/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {TextTh} from "../atoms/Th";
import colorList from "../../assets/colorList";

const thead = {
    solo: css({
        //color
        background: colorList.semantic.card,
    }),
}

export function SoloThead({children}) {
    return (
        <thead css={thead.solo}>
        {
            <tr>{
                children.map((text) => {
                    return <TextTh>{text}</TextTh>
                })
            }</tr>
        }
        </thead>
    )
}
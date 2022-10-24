/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {TextTh} from "../atoms/Th";
import colorList from "../../assets/colorList";

export function MainThead({children, newCss = {}}) {
    return (
        <thead css={css({
            background: colorList.semantic.card,
            ...newCss
        })}>
        {
            <tr>{
                children ? children.map((text) => {
                    return <TextTh>{text}</TextTh>
                }) : null
            }</tr>
        }
        </thead>
    )
}

export function ColGroup({children}) {
    return (
        <colgroup>
            {
                children ? children.map((width) => {
                    return <col width={width}/>
                }) : null
            }
        </colgroup>
    )
}
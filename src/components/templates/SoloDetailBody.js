/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export function SoloDetailBody({newCss = {}}) {
    return (
        <div css={
            css({
                ...newCss
            })}>
            <h1>Home</h1>
            <p>이 곳은 홈 화면입니다.</p>
        </div>
    )
}
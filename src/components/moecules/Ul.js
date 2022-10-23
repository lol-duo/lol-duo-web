/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {NavLi} from "../atoms/Li";

export function NavUl({children, newCss = {}}) {
    return (
        <ul css={
            css({
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                margin: -1,
                padding: 0,
                ...newCss
            })
        }>
            {children ? children.map((text) => {
                return <NavLi>{text}</NavLi>;
            }) : null}
        </ul>
    );
}

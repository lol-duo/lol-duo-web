/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";
import fontList from "../../assets/fontList";
import {NavLink} from "react-router-dom";

const li = {
    nav: css({
        //font
        ...fontList.roboto.regular["20"],
        //color
        color: colorList.grayscale["200"],
        //padding
        padding: "12px 16px",
        "&.active": {
            borderBottom: "2px solid " + colorList.grayscale["050"],
            color: colorList.grayscale["050"],
        },
        textDecoration: "none",
    })
};

export function NavLi({children}) {
    return <NavLink to={"/" + children} css={li.nav}>{children}</NavLink>;
}

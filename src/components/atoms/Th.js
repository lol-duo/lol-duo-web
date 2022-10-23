/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";
import fontList from "../../assets/fontList";

export function TextTh({children, newCss = {}}) {
    return <th css={css({
        //font
        ...fontList.roboto.regular["12"],
        //color
        color: colorList.grayscale["000"],
        //padding
        padding: "10px 12px",

        textAlign: "start",
        ":first-child": {
            borderRadius: "4px 0px 0px 0px",
        },
        ":last-child": {
            borderRadius: "0px 4px 0px 0px",
        },
        ...newCss
    })}>{children}</th>;
}
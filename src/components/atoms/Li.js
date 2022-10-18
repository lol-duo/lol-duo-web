/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import colorList from "../../assets/colorList";
import fontList from "../../assets/fontList";

const li = {
  nav: css({
    //font
    ...fontList.roboto.regular["20"],
    //color
    color: colorList.grayscale["200"],
    //padding
    padding: "12px 16px",
    //hover
    ":hover": {
      borderBottom: "2px solid " + colorList.grayscale["050"],
      color: colorList.grayscale["050"],
    },
  }),
};

export function NavLi({ children }) {
  return <li css={li.nav}>{children}</li>;
}

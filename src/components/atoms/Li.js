/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import color from "../../assets/color";

const li = {
  nav: css({
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.02em",
    color: color.grayscale[200],
    padding: "12px 16px",

    ":hover": {
      borderBottom: "2px solid " + color.grayscale[50],
      color: color.grayscale[50],
    },
  }),
};

export function NavLi({ children }) {
  return <li css={li.nav}>{children}</li>;
}

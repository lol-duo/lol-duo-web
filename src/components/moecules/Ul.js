/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLi } from "../atoms/Li";

const ul = {
  nav: css({
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    margin: -1,
    padding: 0,
  }),
};

export function NavUl({ children }) {
  return (
    <ul css={ul.nav}>
      {children.map((text) => {
        return <NavLi>{text}</NavLi>;
      })}
    </ul>
  );
}

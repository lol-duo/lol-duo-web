/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import color from "../../assets/color";
import { LightLogoBundle } from "../moecules/LogoBundle";
import { NavUl } from "../moecules/Ul";

const gnb = {
  logo: css({
    padding: "20px 60px 20px 60px",
    background: color.semantic.card,
  }),
  nav: css({
    padding: "0px 60px 0px 60px",
    background: color.semantic.card,
  }),
};

export function GnbLogo() {
  return (
    <div css={gnb.logo}>
      <LightLogoBundle />
    </div>
  );
}

export function Gnb({ children }) {
  return (
    <nav css={gnb.nav}>
      <NavUl>{children}</NavUl>
    </nav>
  );
}

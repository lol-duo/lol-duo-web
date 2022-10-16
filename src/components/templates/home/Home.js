/** @jsxImportSource @emotion/react */
import { Gnb, GnbLogo } from "../../organisms/Gnb";
import { css } from "@emotion/react";
import color from "../../../assets/color";

const home = {
  total: css({
    background: color.semantic.background,
    minHeight: "100%",
  }),
};

export function Home() {
  let list = ["Duo", "Solo"];
  return (
    <div css={home.total}>
      <GnbLogo />
      <Gnb>{list}</Gnb>
    </div>
  );
}

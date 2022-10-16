/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LightLogoBundle } from "../../moecules/logo/LightLogoBundle";

const gnb = {
  logo: css({
    height: "72px",
    width: "1080px",
    left: "20px",
    top: "20px",
    borderRadius: "0px",
    padding: "20px 60px 20px 60px",
  }),
};

export function GNB_Logo() {
  return (
    <div className={gnb.logo}>
      <LightLogoBundle />
    </div>
  );
}

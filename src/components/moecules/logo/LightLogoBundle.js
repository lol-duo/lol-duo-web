/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LightLogo, LightName } from "../../atoms/logo/Logo";

const bundle = {
  lightLogoBundle: css({
    width: "164.8px",
    height: "32px",
    position: "relative",
  }),
};

export function LightLogoBundle() {
  return (
    <div className={bundle.lightLogoBundle}>
      <LightLogo />
      <LightName />
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const logo = {
  lightLogo: css({
    height: "32px",
    width: "32px",
    left: "0px",
    top: "0px",
    borderRadius: "0px",
  }),

  lightName: css({
    height: "27.19999885559082px",
    width: "125.12000274658203px",
    left: "38.399993896484375px",
    top: "1.600006103515625px",
    borderRadius: "0px",
  }),
};

export function LightLogo() {
  return (
    <img
      className={logo.lightLogo}
      src="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/logo.png"
      alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/logo.png"
    />
  );
}

export function LightName() {
  return (
    <img
      className={logo.lightName}
      src="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/Frame.png"
      alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/Frame.png"
    />
  );
}

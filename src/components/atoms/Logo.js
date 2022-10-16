/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const logo = {
  lightLogo: css({
    height: "32px",
    width: "32px",
  }),

  lightName: css({
    height: "27.2px",
    width: "125.12px",
    position: "absolute",
    top: "1.6px",
    left: "38.4px",
  }),
};

export function LightLogo() {
  return (
    <img
      css={logo.lightLogo}
      src="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/logo.png"
      alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/logo.png"
    />
  );
}

export function LightName() {
  return (
    <img
      css={logo.lightName}
      src="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/Frame.png"
      alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/Frame.png"
    />
  );
}

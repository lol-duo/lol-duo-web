import Style from "./Style.module.css";

function LightLogo() {
  return (
    <img
      className={Style.LightLogo}
      src="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/logo.png"
      alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/logo/logo.png"
    />
  );
}

export default LightLogo;

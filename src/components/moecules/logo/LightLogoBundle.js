import Style from "./Style.module.css";
import LightLogo from "../../atoms/logo/LightLogo";
import LightName from "../../atoms/logo/LightName";

function LightLogoBundle() {
  return (
    <div className={Style.LightLogo}>
      <LightLogo />
      <LightName />
    </div>
  );
}

export default LightLogoBundle;

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";
import {LightLogoBundle} from "../moecules/LogoBundle";
import {NavUl} from "../moecules/Ul";

const gnb = {
    logo: css({
        height: "56px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 60px",
        background: colorList.semantic.card,
    }),
    nav: css({
        height: "48px",
        padding: "0px 60px 0px 60px",
        background: colorList.semantic.card,
    }),
};

export function GnbLogo() {
    return (
        <div css={gnb.logo}>
            <LightLogoBundle/>
        </div>
    );
}

export function Gnb({children}) {
    return (
        <nav css={gnb.nav}>
            <NavUl>{children}</NavUl>
        </nav>
    );
}

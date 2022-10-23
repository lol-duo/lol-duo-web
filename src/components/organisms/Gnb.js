/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";
import {LightLogoBundle} from "../moecules/LogoBundle";
import {NavUl} from "../moecules/Ul";

const gnb = {
    logo: {
        position: "absolute",
        left: "60px",
        top: "12px",
    }
};

export function GnbLogo({newCss = {}}) {
    return (
        <div css={css({
            height: "56px",
            boxSizing: "border-box",
            padding: "0px 0px 0px 60px",
            background: colorList.semantic.card,
            width: "100%",
            ...newCss
        })}>
            <LightLogoBundle newCss={gnb.logo}/>
        </div>
    );
}

export function Gnb({children, newCss = {}}) {
    return (
        <nav css={css({
            height: "48px",
            padding: "0px 60px 0px 60px",
            background: colorList.semantic.card,
            ...newCss
        })}>
            <NavUl>{children}</NavUl>
        </nav>
    );
}

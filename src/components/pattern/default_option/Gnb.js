/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import colorList from "../../../assets/colorList";
import {Logo} from "../../foundation/icon1/logo/Logo";
import {NavLink} from "react-router-dom";
import fontList from "../../../assets/fontList";

const cssList = {
    logo: {
        height: "56px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 60px",
        background: colorList.semantic.card,
        width: "100%",
    },
    nav: {
        height: "48px",
        padding: "0px 60px 0px 60px",
        background: colorList.semantic.card,
    },
    navUl: {
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        margin: -1,
        padding: 0,
    },
    navLi: {
        ...fontList.roboto.regular["20"],
        color: colorList.grayscale["200"],
        padding: "12px 16px",
        "&.active": {
            ...fontList.roboto.medium["20"],
            borderBottom: "2px solid " + colorList.grayscale["050"],
            color: colorList.grayscale["050"],
        },
        textDecoration: "none",
    }
};

export function GnbLogo({newCss = {}}) {
    return (

        <div css={css({
            ...cssList.logo,
            ...newCss
        })}>
            <NavLink to={"/"}>
                <Logo status={"Light"} newCss={{
                    position: "relative",
                    left: "0px",
                    top: "12px",
                }}/>
            </NavLink>
        </div>
    );
}

export function Gnb({newCss = {}}) {
    return (
        <nav css={css({
            ...cssList.nav,
            ...newCss
        })}>
            <ul css={
                css({
                    ...cssList.navUl,
                })
            }>
                <NavLink to={"/duo"} css={
                    css({
                        ...cssList.navLi,
                    })}>Duo</NavLink>
                <NavLink to={"/solo"} css={
                    css({
                        ...cssList.navLi,
                    })}>Solo</NavLink>
            </ul>
        </nav>
    );
}
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";
import {MainHeader} from "./Header";
import {SoloMainBody} from "./Body";
import {MainFooter} from "./Footer";

const mainPage = {
    header: {},
    body: {
        paddingTop: "276px",
    },
    footer: {
        paddingTop: "101px",
    }
}

export function SoloMainPage() {

    return (
        <div css={css({
            background: colorList.semantic.background,
        })}>
            <MainHeader> </MainHeader>
            <SoloMainBody newCss={mainPage.body}></SoloMainBody>
            <MainFooter newCss={mainPage.footer}></MainFooter>
        </div>
    );
}

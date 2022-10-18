/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";
import {MainHeader} from "./Header";
import {MainBody} from "./Body";
import {MainFooter} from "./Footer";

const page = {
    total: css({
        background: colorList.semantic.background,
        display: "block",
        overflow: "auto",
    }),
};

export function MainPage() {
    return (
        <div css={page.total}>
            <MainHeader> </MainHeader>
            <MainBody></MainBody>
            <MainFooter></MainFooter>
        </div>
    );
}

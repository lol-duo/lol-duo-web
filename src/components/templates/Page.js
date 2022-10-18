/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";
import {MainHeader} from "./Header";
import {MainBody} from "./Body";

const page = {
    total: css({
        background: colorList.semantic.background,
        minHeight: "100%",
    }),
};

export function MainPage() {
    return (
        <div css={page.total}>
            <MainHeader> </MainHeader>
            <MainBody></MainBody>
        </div>
    );
}

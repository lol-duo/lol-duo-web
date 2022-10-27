/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {SelectChampion, SelectLine} from "../atoms/StaticImage";
import {SelectedText, SelectText} from "../atoms/Text";

const searchBar = {
    selectLine: {
        position: "absolute",
        top: "0px",
        left: "0px",
    },
    selectText: {
        position: "absolute",
        top: "0px",
        left: "0px",
    },
    selectedText: {
        position: "absolute",
        top: "21px",
        left: "0px",
    }
}

export function SearchBarChampion({newCss = {}, src, name}) {
    return (
        <div css={css({
            position: "absolute",
            left: "198px",
            top: "16px",
            width: "244px",
            height: "44px",
            ...newCss
        })}>
            <SelectChampion src={src} newCss={searchBar.selectLine}/>
            <div css={css({
                position: "absolute",
                top: "2px",
                left: "60px",
                width: "74px",
                height: "40px",
            })}>
                <SelectText css={searchBar.selectText} text="Champion"/>
                <SelectedText css={searchBar.selectedText} text={name}/>
            </div>
        </div>
    )
}

export function SearchBarPosition2({newCss = {}, line}) {
    return (
        <div
            css={css({
                position: "absolute",
                top: "16px",
                left: "32px",
                width: "134px",
                height: "44px",
                ...newCss
            })}
        >
            <SelectLine line={line}/>
            <div css={css({
                position: "absolute",
                top: "2px",
                left: "60px",
                width: "74px",
                height: "40px",
            })}>
                <SelectText css={searchBar.selectText} text="Position"/>
                <SelectedText css={searchBar.selectedText} text={line}/>
            </div>
        </div>
    )
}
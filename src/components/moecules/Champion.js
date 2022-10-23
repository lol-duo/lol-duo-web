/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {LineImage, RuneImage, SoloChampionImage} from "../atoms/Image";
import {SoloChampionText} from "../atoms/Text";

const champion = {
    champion: {
        position: "absolute",
        left: "22px",
        top: "0px",
    },
    rune: {
        position: "absolute",
        left: "0px",
        top: "13px",
    },
    line: {
        position: "absolute",
        left: "50px",
        top: "26px",
    },
    name: {
        position: "absolute",
        left: "94px",
        top: "16px",
    }
}

export function Champion({championInfo, newCss = {}}) {
    return <div css={css({
        height: '46px',
        width: '70px',
        ...newCss
    })}>
        <SoloChampionImage newCss={champion.champion} src={championInfo.champion}/>
        <RuneImage newCss={champion.rune} src={championInfo.rune}/>
        <LineImage newCss={champion.line} src={championInfo.line}/>
    </div>;
}

export function SoloChampion({children, name, newCss = {}}) {
    return (
        <td css={
            css({
                width: "176px",
                height: "46px",
                ...newCss
            })
        }>
            {children}
            <SoloChampionText newCss={champion.name}>{name}</SoloChampionText>
        </td>
    )
}

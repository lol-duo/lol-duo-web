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
    soloName: {
        position: "absolute",
        left: "94px",
        top: "16px",
    },
    duoName: {
        position: "relative",
        textAlign: "center",
        top: "2px",
    }
}

export function Champion({championInfo, newCss = {}}) {
    return <div css={css({
        height: '46px',
        width: '70px',
        position: 'relative',
        ...newCss
    })}>
        <SoloChampionImage newCss={champion.champion} src={championInfo.championImgUrl}/>
        <RuneImage newCss={champion.rune} src={championInfo.mainRuneImgUrl}/>
        <LineImage newCss={champion.line} src={championInfo.positionImgUrl}/>
    </div>;
}

export function SoloChampion({championInfo, name, newCss = {}}) {
    return (
        <td css={
            css({
                width: "176px",
                height: "46px",
                position: "relative",
                ...newCss
            })
        }>
            <Champion championInfo={championInfo}/>
            <SoloChampionText newCss={champion.soloName}>{name}</SoloChampionText>
        </td>
    )
}

export function DuoChampion({championInfo, newCss = {}}) {
    return (
        <td css={
            css({
                width: "71px",
                height: "62px",
                justifyContent: "center",
                ...newCss
            })
        }>
            <Champion championInfo={championInfo}/>
            <SoloChampionText newCss={champion.duoName}>{championInfo.championName}</SoloChampionText>
        </td>
    )
}

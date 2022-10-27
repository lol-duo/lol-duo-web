/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {BigChampionImage, LineImage, RuneImage, SoloChampionImage} from "../atoms/Image";
import {SoloChampionText} from "../atoms/Text";

const champion = {
    runeBig: {
        position: "absolute",
        left: "0px",
        top: "23px",
    },
    lineBig: {
        position: "absolute",
        left: "75px",
        top: "46px",
    },
    championBig: {
        position: 'absolute',
        left: "22px",
    },
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

export function ChampionTop({championInfo, newCss = {}}) {
    return (
        <div css={css({
            position: "relative",
            width: "99px",
            height: "70px",
            ...newCss
        })}>
            <BigChampionImage newCss={champion.championBig} src={championInfo.championImgUrl}/>
            <RuneImage newCss={champion.runeBig} src={championInfo.mainRuneImgUrl}/>
            <LineImage newCss={champion.lineBig} src={championInfo.positionImgUrl}/>
            <SoloChampionText newCss={champion.soloName} championInfo={championInfo}/>
        </div>
    );
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

export function DuoChampionTop({championInfo, newCss = {}}) {
    return (
        <td css={
            css({
                width: "99px",
                height: "86px",
                justifyContent: "center",
                ...newCss
            })
        }>
            <Champion championInfo={championInfo}/>
            <SoloChampionText newCss={champion.duoName}>{championInfo.championName}</SoloChampionText>
        </td>
    )
}

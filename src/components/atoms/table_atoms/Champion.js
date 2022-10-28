/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";

const cssList = {
    champion: {
        small: {
            width: "40px",
            height: "40px",
            borderRadius: "50%",
        },
        big: {
            width: "64px",
            height: "64px",
            borderRadius: "50%",
        }
    },
    rune: {
        width: "20px",
        height: "20px",
    },
    position: {
        small: {
            width: "20px",
            height: "20px",
        },
        big: {
            width: "24px",
            height: "24px",
        }
    }
}

const newCssList = {
    champion: {
        small: {
            position: "absolute",
            left: "22px",
            top: "0px",
        },
        big: {
            position: "absolute",
            left: "26px",
            top: "0px",
        }
    },
    rune: {
        small: {
            position: "absolute",
            left: "0px",
            top: "13px",
        },
        big: {
            position: "absolute",
            left: "0px",
            top: "23px",
        }
    },
    position: {
        small: {
            position: "absolute",
            left: "50px",
            top: "26px",
        },
        big: {
            position: "absolute",
            left: "75px",
            top: "46px",
        }
    }
}

function ChampionImage({src, size, newCss = {}}) {
    let championCss = size === "small" ? cssList.champion.small : cssList.champion.big;
    return <img css={
        css({
            ...championCss,
            ...newCss
        })
    } src={src} alt={src}/>;
}

function RuneImage({src, newCss = {}}) {
    return <img css={
        css({
            ...cssList.rune,
            ...newCss
        })
    } src={src} alt={src}/>;
}

function PositionImage({src, size, newCss = {}}) {
    let positionCss = size === "small" ? cssList.position.small : cssList.position.big;
    return <img css={
        css({
            ...positionCss,
            ...newCss
        })
    } src={src} alt={src}/>;
}

export function Champion({championInfo, size, newCss = {}}) {
    let championCss = size === "small" ?
        {
            champion: newCssList.champion.small,
            rune: newCssList.rune.small,
            position: newCssList.position.small,
        } :
        {
            champion: newCssList.champion.big,
            rune: newCssList.rune.big,
            position: newCssList.position.big,
        };

    return (
        <div>
            <RuneImage src={championInfo.mainRuneImgUrl} newCss={championCss.rune}/>
            <ChampionImage src={championInfo.championImgUrl} size={size} newCss={championCss.champion}/>
            <PositionImage src={championInfo.positionImgUrl} size={size} newCss={championCss.position}/>
        </div>
    )
}
/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import fontList from "../../../assets/fontList";
import colorList from "../../../assets/colorList";

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
        },
        smallImg: {
            width: "44px",
            height: "44px",
        },
        bigImg: {
            width: "72px",
            height: "72px",
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
    },
    name: {
        ...fontList.roboto.bold["12"],
        color: colorList.grayscale["000"],
        height: "14px",
        width: "87px",
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
    },
    name: {
        small: {
            solo: {
                position: "absolute",
                left: "94px",
                top: "16px",
            },
            duo: {
                position: "relative",
                textAlign: "center",
                top: "2px",
                left: "50%",
                transform: "translateX(-50%)",
            }
        },
        big: {
            position: "relative",
            textAlign: "center",
            top: "2px",
            left: "50%",
            transform: "translateX(-50%)",
        }
    }
}

function ChampionImage({src, size, newCss = {}}) {
    let championCss = size === "small" ? cssList.champion.small : cssList.champion.big;
    let championImgCss = size === "small" ? cssList.champion.smallImg : cssList.champion.bigImg;
    return <div css={
        css({
            ...championCss,
            overflow: "hidden",
            ...newCss
        })
    }>
        <img css={css({
            ...championImgCss,
        })} src={src} alt={src}/>
    </div>;
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

function ChampionName({name, newCss = {}}) {
    return <div css={
        css({
            ...cssList.name,
            ...newCss
        })
    }>{name}</div>;
}

export function Champion({championInfo, size, isSolo, newCss = {}}) {
    let championCss = size === "small" ?
        {
            champion: newCssList.champion.small,
            rune: newCssList.rune.small,
            position: newCssList.position.small,
            name: isSolo ? newCssList.name.small.solo : newCssList.name.small.duo,
        } :
        {
            champion: newCssList.champion.big,
            rune: newCssList.rune.big,
            position: newCssList.position.big,
            name: newCssList.name.big,
        };

    return (
        <div css={css({
            position: "relative",
            width: size === "small" ? isSolo ? "194px" : "87px" : "99px",
            height: size === "small" ? isSolo ? "40px" : "20px" : "64px",
            ...newCss
        })}>
            <div css={css({
                position: "relative",
                width: size === "small" ? "70px" : "99px",
                height: size === "small" ? "46px" : "70px",
                left: isSolo ? "0px" : "50%",
                transform: isSolo ? "0" : "translateX(-50%)",
            })}>
                <RuneImage src={championInfo.mainRuneImgUrl} newCss={championCss.rune}/>
                <ChampionImage src={championInfo.championImgUrl} size={size} newCss={championCss.champion}/>
                <PositionImage src={championInfo.positionImgUrl} size={size} newCss={championCss.position}/>
            </div>
            <ChampionName name={championInfo.championName} newCss={championCss.name}/>
        </div>
    )
}
/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import colorList from "../../../../assets/colorList";

const iconCss = {
    weight: "16px",
    height: "16px",
}

const imageList = {
    searchGlass: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/searchGlass.svg",
    rankUp: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/rankChange/RankUp.svg",
    rankDown: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/rankChange/RankDown.svg",
    rankSame: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/rankChange/RankSame.svg",
    downArrow: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/downArrow.svg",
    leftArrow: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/leftArrow.svg",
    rightArrow: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/rightArrow.svg",
    upArrow: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/upArrow.svg",
    allChampion: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/ALL.svg",
    itemIcon: "https://d2d4ci5rabfoyr.cloudfront.net/detail/item/ItemArrow.svg",
}

export function SearchGlassIcon({newCss = {}}) {
    return <img css={css({
        ...iconCss,
        ...newCss
    })} src={imageList.searchGlass} alt={imageList.searchGlass}/>;
}

export function RankUpIcon({rankChangeNumber, newCss = {}}) {
    let src = rankChangeNumber === 0 ? imageList.rankSame
        : rankChangeNumber > 0 ? imageList.rankUp : imageList.rankDown;
    return <img css={css({
        ...iconCss,
        ...newCss
    })} src={src} alt={src}/>;
}

export function ArrowIcon({direction, newCss = {}}) {
    let src = imageList[direction + "Arrow"];
    return <img css={css({
        ...iconCss,
        ...newCss
    })} src={src} alt={src}/>;
}

export function SelectedChampionIcon({src, newCss = {}}) {
    src = src === "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/champion/All.svg" ? imageList.allChampion : src;
    return <img css={css({
        width: "44px",
        height: "44px",
        border: "1px dashed" + colorList.secondary.beige,
        borderRadius: "50%",
        ...newCss
    })} src={src} alt={src}/>
}

export function IconSIze24({src, newCss = {}}) {
    return <img css={css({
        width: "24px",
        height: "24px",
        ...newCss
    })} src={src} alt={src}/>
}

export function ItemIcon({newCss = {}}) {
    return <img css={css({
        height: "6.84px",
        width: "3.61px",
        ...newCss
    })} src={imageList.itemIcon} alt={imageList.itemIcon}/>
}
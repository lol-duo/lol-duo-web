/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";

export function LogoRank({newCss = {}, rank}) {
    let logoRank = {
        first: "",
        second: "",
        third: "",
    }
    return <img css={css({
        height: "32px",
        width: "32px",
        ...newCss
    })}/>
}

export function SelectChampion({newCss = {}, src}) {
    return (
        <img css={css({
            width: "44px",
            height: "44px",
            border: "1px dashed" + colorList.secondary.beige,
            borderRadius: "50%",
        })} src={src} alt="champion"/>
    )
}

export function SearchImg({newCss = {}}) {
    return (
        <img css={css({
            width: "16px",
            height: "16px",
            ...newCss
        })} src="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/searchGlass.svg"
             alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/searchGlass.svg"/>
    )
}

export function SelectLine({newCss = {}, line, onClick}) {
    let lineImg = {
        ALL: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/ALL.svg",
        TOP: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/TOP.svg",
        JUNGLE: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/JUNGLE.svg",
        MIDDLE: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/MIDDLE.svg",
        BOTTOM: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/BOTTOM.svg",
        SUPPORT: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/search/UTILITY.svg",
    }
    return (<div onClick={onClick} css={css({
        width: "44px",
        height: "44px",
        backgroundColor: colorList.grayscale["400"],
        borderRadius: "50%",
        position: "relative",


    })}><img css={css({
        position: "absolute",
        top: "10px",
        left: "10px",
        width: "24px",
        height: "24px",
        ...newCss
    })} src={lineImg[line]} alt={lineImg["top"]}/></div>)
}

export function DotDotDot({newCss = {}}) {
    return (
        <img css={css({
            width: "20px",
            height: "14px",
            ...newCss
        })}
             src="https://d2d4ci5rabfoyr.cloudfront.net/mainPage/icon/listImage.svg"
             alt="https://d2d4ci5rabfoyr.cloudfront.net/mainPage/icon/listImage.svg"/>
    );
}

export function DarkLogo({newCss = {}}) {
    return (
        <img
            css={
                css({
                    height: "32px",
                    width: "32px",
                    ...newCss
                })
            }
            src="https://d2d4ci5rabfoyr.cloudfront.net/logo/Group_Gray.svg"
            alt="https://d2d4ci5rabfoyr.cloudfront.net/logo/Group_Gray.svg"
        />
    );
}

export function LightLogo({newCss = {}}) {
    return (
        <img
            css={
                css({
                    height: "32px",
                    width: "32px",
                    ...newCss
                })
            }
            src="https://d2d4ci5rabfoyr.cloudfront.net/logo/Group.svg"
            alt="https://d2d4ci5rabfoyr.cloudfront.net/logo/Group.svg"
        />
    );
}

export function LightName({newCss = {}}) {
    return (
        <img
            css={
                css({
                    height: "27.2px",
                    width: "125.12px",
                    ...newCss
                })
            }
            src="https://d2d4ci5rabfoyr.cloudfront.net/logo/Frame.svg"
            alt="https://d2d4ci5rabfoyr.cloudfront.net/logo/Frame.svg"
        />
    );
}

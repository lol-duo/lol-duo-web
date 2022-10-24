/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

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

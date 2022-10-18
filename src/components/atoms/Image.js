/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const image = {
    soloChampion: css({
        position: 'absolute',
        height: '40px',
        width: '40px',

        left: "22px",
        top: "0px",

        borderRadius: "50%",

    }),

    rune: css({
        position: 'absolute',
        height: '20px',
        width: '20px',

        left: "0px",
        top: "13px",
    }),

    line: css({
        position: 'absolute',
        height: '20px',
        width: '20px',

        left: "50px",
        top: "26px",
    })
}

export function SoloChampionImage({src}) {
    return <img css={image.soloChampion} src={src}
                alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/champion/Teemo.png"/>;
}

export function RuneImage({src}) {
    return <img css={image.rune} src={src}
                alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/mainRune/ArcaneComet.png"/>;
}

export function LineImage({src}) {
    return <img css={image.line} src={src}
                alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/position/MIDDLE.png"/>;
}
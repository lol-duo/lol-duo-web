/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {DuoChampion} from "./Champion";
import {DotDotDot} from "../atoms/StaticImage";
import {DuoTdRate} from "../atoms/Td";

const ChampionBundle = {
    champion: {
        first: {
            position: 'absolute',
            left: "0px",
        },
        second: {
            position: 'absolute',
            right: "0px",
        }
    },
    duoChampionBundle: {
        firstDot: {
            position: 'absolute',
            left: "79px",
            top: "24px",
        },
        secondDot: {
            position: 'absolute',
            right: "79px",
            top: "24px",
        },
        rate: {
            position: 'absolute',
            left: "103px",
            top: "24px",
        }
    }
}

export function DuoChampionBundle({championInfo, newCss = {}}) {
    return (
        <div css={css({
            position: 'relative',
            height: "62px",
            width: "270px",
            ...newCss
        })}>
            <DuoChampion newCss={ChampionBundle.champion.first} championInfo={championInfo.champion1}/>
            <DotDotDot newCss={ChampionBundle.duoChampionBundle.firstDot}/>
            <DuoTdRate newCss={ChampionBundle.duoChampionBundle.rate} rate={championInfo.winRate}/>
            <DotDotDot newCss={ChampionBundle.duoChampionBundle.secondDot}/>
            <DuoChampion newCss={ChampionBundle.champion.second} championInfo={championInfo.champion2}/>
        </div>
    );
}
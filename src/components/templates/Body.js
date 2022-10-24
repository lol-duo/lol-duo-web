/** @jsxImportSource @emotion/react */
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {DuoTable, SoloTable} from "../organisms/Table";
import colorList from "../../assets/colorList";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const duoMainBody = {
    table: {
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
    }
}

const soloMainBody = {
    table: {
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
    }
}

export function DuoMainBody({newCss = {}}) {

    const [duoChampionListResult, setDuoChampionListResult] = useState([
        {
            id: 4931,
            rankChangeImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/RankSame.svg",
            rankChangeNumber: "",
            rankChangeColor: "",
            rankNumber: 1,
            rankNumberIcon: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/icon/rankChangeIcon.svg",
            rankNumberColor: "C8AA6E",
            champion1: {
                championName: "미스 포츈",
                championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/MissFortune.svg",
                mainRuneImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/PressTheAttack.svg",
                positionImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/BOTTOM.svg",
            },
            champion2: {
                championName: "케인",
                championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Kayn.svg",
                mainRuneImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/Conqueror.svg",
                positionImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/JUNGLE.svg",
            },
            listImage: "",
            winRate: "68.53%"
        }]);


    const setDuoChampionListResultByApi = useCallback(async () => {
        const apiData = await axios.get(
            "https://api.lolduo.net/v2/doubleInfo?championId=0&championId2=0&position=ALL&position2=ALL"
        );
        setDuoChampionListResult(apiData.data);
        console.log(apiData.data);
    }, []);

    useEffect(() => {
        setDuoChampionListResultByApi().then(r => console.log(r));
    }, [setDuoChampionListResultByApi]);

    const tableInfo = {
        header: ["Rank"],
        colgroup: ["676px"],
        bodyInfo: duoChampionListResult,
    }

    return (
        <div css={css({
            color: colorList.semantic.background,
            ...newCss
        })}>
            <DuoTable newCss={duoMainBody.table} tableInfo={tableInfo}/>
        </div>
    )
}

export function SoloMainBody({newCss = {}}) {

    const [championListResult, setChampionListResult] = useState([
        {
            id: 15,
            rankChangeImgUrl: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/rankChange/RankUp.png",
            rankChangeNumber: "+1",
            rankChangeColor: "C8AA6E",
            championName: "티모",
            championImgUrl: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/champion/Teemo.png",
            mainRuneImgUrl: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/mainRune/ArcaneComet.png",
            positionImgUrl: "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/mainPage/position/MIDDLE.png",
            winRate: "67.2%",
            rankNumber: 1,
            rankNumberColor: "C8AA6E"
        }]);


    const setChampionListResultByApi = useCallback(async () => {
        const apiData = await axios.get(
            "https://api.lolduo.net/v2/soloInfo?championId=0&position=ALL"
        );
        setChampionListResult(apiData.data);
        console.log(apiData.data);
    }, []);

    useEffect(() => {
        setChampionListResultByApi().then(r => console.log(r));
    }, [setChampionListResultByApi]);

    const tableInfo = {
        header: ["Rank", "Champion", "Win Rate"],
        colgroup: ["150px", "238px", "288px"],
        bodyInfo: championListResult,
    }

    return (
        <div css={css({
            color: colorList.semantic.background,
            ...newCss
        })}>
            <SoloTable newCss={soloMainBody.table} tableInfo={tableInfo}/>
        </div>
    )
}
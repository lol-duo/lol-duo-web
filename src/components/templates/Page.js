/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../assets/colorList";
import {MainHeader} from "./Header";
import {SoloMainBody} from "./Body";
import {MainFooter} from "./Footer";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const mainPage = {
    header: {},
    body: {
        overflow: "hidden",
    },
    footer: {
        position: "relative",
    }
}


export function SoloMainPage() {

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
            "https://api.lolduo.net/v2/getSoloInfo?championId=0&position=ALL"
        );
        setChampionListResult(apiData.data);
        console.log(apiData.data);
    }, []);

    useEffect(() => {
        setChampionListResultByApi().then(r => console.log(r));
    }, []);

    const tableInfo = {
        header: ["Rank", "Champion", "Win Rate"],
        bodyInfo: championListResult,
    }

    return (
        <div css={css({
            background: colorList.semantic.background,
        })}>
            <MainHeader> </MainHeader>
            <SoloMainBody tableInfo={tableInfo} newCss={mainPage.body}></SoloMainBody>
            <MainFooter newCss={mainPage.footer}></MainFooter>
        </div>
    );
}

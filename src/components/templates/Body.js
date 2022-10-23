/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {SoloTable} from "../organisms/Table";
import colorList from "../../assets/colorList";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const soloMainBody = {
    table: {
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
    }
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
            "https://api.lolduo.net/v2/getSoloInfo?championId=0&position=ALL"
        );
        setChampionListResult(apiData.data);
        console.log(apiData.data);
    }, []);

    useEffect(() => {
        setChampionListResultByApi().then(r => console.log(r));
    }, [setChampionListResultByApi]);

    const tableInfo = {
        header: ["Rank", "Champion", "Win Rate"],
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
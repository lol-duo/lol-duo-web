/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import {SearchBar} from "../pattern/searchBar/SearchBar";
import {useEffect, useState} from "react";
import assets from "../../assets/assets";
import {getSoloChampionListResultByApi} from "../../api/api";
import {SoloTableHeader} from "../pattern/table/TableHeader";
import {SoloTable} from "../pattern/table/SoloTable";

export function SoloMainBody({newCss = {}}) {
    const [userSelected, setUserSelected] = useState({
        "position": assets.position.all, "champion": {
            "id": 0,
            "name": "All",
            "championImgUrl": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/champion/All.svg"
        }
    });

    const [mainChampion, setMainChampion] = useState(
        [{
            "id": 442,
            "rankChangeImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/RankSame.svg",
            "rankChangeNumber": 10,
            "championName": "미스 포츈",
            "championImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/MissFortune.svg",
            "mainRuneImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/LethalTempoTemp.svg",
            "positionImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/BOTTOM.svg",
            "winRate": "58.30%",
            "rankNumber": 1
        }]
    );

    const callApi = async (champion, position) => {
        getSoloChampionListResultByApi({
            setSoloChampionListResult: setMainChampion,
            id: champion.id,
            position: position
        });
    }

    const setChampion = (champion) => {
        setUserSelected({
            ...userSelected,
            "champion": {
                "id": champion.id,
                "name": champion.name,
                "championImgUrl": champion.imgUrl
            }
        })
    }

    const setPosition = (position) => {
        setUserSelected({
            ...userSelected,
            "position": position
        })
    }

    useEffect(() => {
        callApi(userSelected.champion, userSelected.position).then(() => console.log(userSelected));
    }, [userSelected]);

    return (
        <div css={css({
            position: "relative",
            ...newCss
        })}>
            <SearchBar newCss={{
                position: "absolute",
                top: "176px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: "1000"
            }} setMainPosition={setPosition} setMainChampion={setChampion}/>
            <SoloTableHeader newCss={{
                position: "absolute",
                top: "276px",
                left: "50%",
                transform: "translateX(-50%)",

            }}/>
            <div css={css({
                position: "absolute",
                top: "312px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                left: "50%",
                transform: "translateX(-50%)"
            })}>
                {
                    mainChampion.map((champion, index) => {
                        return (
                            <SoloTable key={index} championInfo={champion}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
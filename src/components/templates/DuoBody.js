/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import {SearchBar} from "../pattern/searchBar/SearchBar";
import {useEffect, useState} from "react";
import assets from "../../assets/assets";
import {SoloTableHeader} from "../pattern/table/TableHeader";
import {SoloTable} from "../pattern/table/SoloTable";
import {getDuoChampionListResultByApi} from "../../api/api";

export function DuoMainBody({newCss = {}}) {
    const [userSelected, setUserSelected] = useState([{
        "position": assets.position.all, "champion": {
            "id": 0,
            "name": "All",
            "championImgUrl": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/champion/All.svg"
        }
    }, {
        "position": assets.position.all, "champion": {
            "id": 0,
            "name": "All",
            "championImgUrl": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/champion/All.svg"
        }
    }]);

    const [mainChampion, setMainChampion] = useState(
        [{
            "id": 4931,
            "rankChangeImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/RankSame.svg",
            "rankChangeNumber": 0,
            "rankNumber": 1,
            "rankNumberIcon": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/rankChange/1.svg",
            "champion1": {
                "championName": "케인",
                "championImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/Kayn.svg",
                "mainRuneImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/Conqueror.svg",
                "positionImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/JUNGLE.svg"
            },
            "champion2": {
                "championName": "미스 포츈",
                "championImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/MissFortune.svg",
                "mainRuneImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/mainRune/PressTheAttack.svg",
                "positionImgUrl": "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/position/BOTTOM.svg"
            },
            "winRate": "68.53%"
        }]
    );

    const callApi = async (champion1, champion2, position1, position2) => {
        getDuoChampionListResultByApi({
            setDuoChampionListResult: setMainChampion,
            id1: champion1.id,
            position1: position1,
            id2: champion2.id,
            position2: position2
        });
    }

    const setChampion1 = (champion) => {
        setUserSelected([{
            "position": userSelected[0].position,
            "champion": {
                "id": champion.id,
                "name": champion.name,
                "championImgUrl": champion.imgUrl
            }
        }, userSelected[1]]);
    }

    const setChampion2 = (champion) => {
        setUserSelected([userSelected[0], {
            "position": userSelected[1].position,
            "champion": {
                "id": champion.id,
                "name": champion.name,
                "championImgUrl": champion.imgUrl
            }
        }]);
    }

    const setPosition1 = (position) => {
        setUserSelected([{
            "position": position,
            "champion": userSelected[0].champion
        }, userSelected[1]]);
    }

    const setPosition2 = (position) => {
        setUserSelected([userSelected[0], {
            "position": position,
            "champion": userSelected[1].champion
        }]);
    }

    useEffect(() => {
        callApi(userSelected[0].champion, userSelected[1].champion, userSelected[0].position, userSelected[1].position).then(() => console.log(userSelected));
    }, [userSelected]);

    return (
        <div css={css({
            position: "relative",
            ...newCss
        })}>
            <div css={css({
                position: "absolute",
                width: "960px",
                display: "flex",
                left: "50%",
                top: "176px",
                transform: "translateX(-50%)",
                zIndex: "1000"
            })}>
                <SearchBar newCss={{}} setMainPosition={setPosition1} setMainChampion={setChampion1}/>
                <SearchBar newCss={{
                    position: "relative",
                    left: "12px"
                }} setMainPosition={setPosition2} setMainChampion={setChampion2}/>
            </div>
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
                            <SoloTable key={index} championInfo={champion.champion1}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
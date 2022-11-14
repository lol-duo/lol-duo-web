/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import {SearchBar} from "../pattern/searchBar/SearchBar";
import {useEffect, useRef, useState} from "react";
import assets from "../../assets/assets";
import {DuoTableHeader} from "../pattern/table/TableHeader";
import {getDuoChampionListResultByApi} from "../../api/api";
import {BigDuoTable, DuoTable} from "../pattern/table/DuoTable";
import {createSearchParams, Link} from "react-router-dom";
import fontList from "../../assets/fontList";
import colorList from "../../assets/colorList";

function useOutsideClick1(ref, setFirstFocus) {
    useEffect(() => {

        function handleClickOutside(event) {

            // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
            if (ref.current && !ref.current.contains(event.target)) {
                setFirstFocus(true);
            } else {
                setFirstFocus(false);
            }
        }

        // 현재 document에 이벤트리스너를 추가합니다.
        document.addEventListener("mousedown", handleClickOutside);

        // useEffect 함수가 return하는 것은 마운트 해제하는 것과 동일합니다.
        // 즉, Class 컴포넌트의 componentWillUnmount 생명주기와 동일합니다.
        // 더 이상'mousedown'이벤트가 동작하더라도 handleClickOutside 함수가 실행되지 않습니다.
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setFirstFocus]); // ref가 변경되면 useEffect를 다시 생성합니다.
}

function useOutsideClick2(ref, setSecondFocus) {
    useEffect(() => {

        function handleClickOutside(event) {

            // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
            if (ref.current && !ref.current.contains(event.target)) {
                setSecondFocus(true);
            } else {
                setSecondFocus(false);
            }
        }

        // 현재 document에 이벤트리스너를 추가합니다.
        document.addEventListener("mousedown", handleClickOutside);

        // useEffect 함수가 return하는 것은 마운트 해제하는 것과 동일합니다.
        // 즉, Class 컴포넌트의 componentWillUnmount 생명주기와 동일합니다.
        // 더 이상'mousedown'이벤트가 동작하더라도 handleClickOutside 함수가 실행되지 않습니다.
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setSecondFocus]); // ref가 변경되면 useEffect를 다시 생성합니다.
}

export function DuoMainBody({newCss = {}}) {

    const outsideRef1 = useRef(null);
    const outsideRef2 = useRef(null);


    const [firstFocus, setFirstFocus] = useState(false);
    const [secondFocus, setSecondFocus] = useState(false);

    useOutsideClick1(outsideRef1, setFirstFocus);
    useOutsideClick2(outsideRef2, setSecondFocus);


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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...newCss
        })}>
            <div css={css({

                width: "960px",
                display: "flex",
                zIndex: "1000"
            })}>
                <div ref={outsideRef1}>
                    <SearchBar newCss={{
                        position: "relative",
                    }} setMainPosition={setPosition1} setMainChampion={setChampion1} resetFocus={firstFocus}/>
                </div>
                <div ref={outsideRef2}>
                    <SearchBar newCss={{
                        position: "relative",
                        left: "12px"
                    }} setMainPosition={setPosition2} setMainChampion={setChampion2} resetFocus={secondFocus}/>
                </div>
            </div>
            <DuoTableHeader newCss={{
                marginTop: "24px",
            }}/>
            <div css={css({
                marginTop: "4px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",

            })}>
                {
                    mainChampion.length > 3 ?
                        <>
                            <Link key="firstBigTable" to={{
                                pathname: "/duo/detail",
                                search: `${createSearchParams({id: mainChampion[0].id + ""})}`
                            }}>
                                <BigDuoTable rankInfo={mainChampion[0]}/>
                            </Link>
                            <div css={css({
                                display: "flex",
                                flexDirection: "row",
                                gap: "4px"
                            })}>
                                <Link to={{
                                    pathname: "/duo/detail",
                                    search: `${createSearchParams({id: mainChampion[1].id + ""})}`
                                }}>
                                    <BigDuoTable rankInfo={mainChampion[1]}/>
                                </Link>
                                <Link to={{
                                    pathname: "/duo/detail",
                                    search: `${createSearchParams({id: mainChampion[2].id + ""})}`
                                }}>
                                    <BigDuoTable rankInfo={mainChampion[2]}/>
                                </Link>
                            </div>
                            {
                                mainChampion.map((champion, index) => {
                                    if (index > 2) {
                                        return (
                                            <Link key={index} to={{
                                                pathname: "/duo/detail",
                                                search: `${createSearchParams({id: mainChampion[index].id + ""})}`
                                            }}>
                                                <DuoTable rankInfo={champion}/>
                                            </Link>)
                                    } else {
                                        return null;
                                    }
                                })
                            }
                        </>
                        : mainChampion.length === 0 ?
                            <div css={{
                                height: "17px",
                                width: "258px",
                                ...fontList.roboto.regular["14"],
                                color: colorList.grayscale["000"],
                                position: "relative",
                                top: "54px",
                            }}>현재 포지션/챔피언의 데이터가 부족합니다.</div>
                            :
                            mainChampion.map((champion, index) => {
                                return (
                                    <Link key={index} to={{
                                        pathname: "/duo/detail",
                                        search: `${createSearchParams({id: mainChampion[index].id + ""})}`
                                    }}>
                                        <DuoTable rankInfo={champion}/>
                                    </Link>
                                )
                            })
                }
            </div>
        </div>
    )
}
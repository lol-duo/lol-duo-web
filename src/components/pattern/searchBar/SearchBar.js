/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";

import {SearchBarPositionCircle} from "../../foundation/icon1/position_icon/SearchBarPositionCircle";
import colorList from "../../../assets/colorList";
import assets from "../../../assets/assets";
import {useEffect, useState} from "react";
import fontList from "../../../assets/fontList";
import {ArrowIcon, SelectedChampionIcon} from "../../foundation/icon1/default/Icon";
import {SearchBarPosition} from "../../atoms/table_atoms/SearchBarPosition";
import {SearchBarChampion} from "../../atoms/table_atoms/SearchBarChampion";

const cssList = {
    searchBar: {
        width: "474px",
        height: "76px",
        backgroundColor: colorList.semantic.card,
        borderRadius: "100px",
    },
    searchBarChampion: {
        background: {
            width: "244px",
            height: "44px",
        }
    },
    bar: {
        border: "1px solid" + colorList.grayscale["300"],
        width: "0px",
        height: "36px",
    },
    searchBarPosition: {
        background: {
            width: "134px",
            height: "44px",
        },
        text: {
            position: {
                ...fontList.roboto.regular["14"],
                color: colorList.grayscale["100"],
            },
            positionSelected: {
                ...fontList.roboto.medium["16"],
                color: colorList.grayscale["000"],
            }
        }

    }
}


export function SearchBar({newCss = {}, setMainChampion, setMainPosition, resetFocus = false}) {

    const [focus, setFocus] = useState([false, false]);

    useEffect(() => {
        if (resetFocus) {
            setFocus([false, false]);
        }
    }, [resetFocus])

    const [userSearch, setUserSearch] = useState({
        "position": assets.position.all, "champion": {
            "id": 0,
            "name": "All",
            "championImgUrl": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/champion/All.svg"
        }
    });

    const setPosition = (position) => {
        setUserSearch({
            ...userSearch,
            "position": position
        })
        setFocus([false, false]);
        setMainPosition(position);
    }

    const setChampion = (champion) => {
        setUserSearch({
            ...userSearch,
            "champion": {
                "id": champion.id,
                "name": champion.name,
                "championImgUrl": champion.imgUrl
            }
        })
        setFocus([false, false]);
        setMainChampion(champion);
    }
    return (
        <div css={css({
            width: "474px",
            height: "76px",
            ...newCss
        })}>
            <div css={css({
                ...cssList.searchBar,
                position: "relative",
                top: "0px",
                left: "0px",
            })}>
                <div onClick={() => setFocus([!focus[0], false])} css={css({
                    ...cssList.searchBarPosition.background,
                    position: "absolute",
                    top: "16px",
                    left: "32px",
                })}>
                    <SearchBarPositionCircle newCss={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                    }} position={userSearch.position}/>
                    <div css={css({
                        ...cssList.searchBarPosition.text.position,
                        position: "absolute",
                        left: "60px",
                        top: "2px",
                    })}>Position
                    </div>
                    <ArrowIcon newCss={css({
                        position: "absolute",
                        top: "2.5px",
                        left: "118px",
                    })} direction={focus[0] ? "down" : "up"}/>
                    <div css={css({
                        ...cssList.searchBarPosition.text.positionSelected,
                        position: "absolute",
                        top: "23px",
                        left: "60px",
                    })}>
                        {userSearch.position}
                    </div>
                </div>
                <div css={css({
                    ...cssList.bar,
                    position: "absolute",
                    top: "20px",
                    left: "182px",

                })}/>
                <div onClick={() => setFocus([false, !focus[1]])} css={css({
                    ...cssList.searchBarChampion.background,
                    position: "absolute",
                    top: "16px",
                    left: "198px",
                })}>
                    <SelectedChampionIcon src={userSearch.champion.championImgUrl} newCss={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                    }}/>
                    <div css={css({
                        ...cssList.searchBarPosition.text.position,
                        position: "absolute",
                        left: "60px",
                        top: "2px",
                    })}>Champion
                    </div>
                    <ArrowIcon newCss={css({
                        position: "absolute",
                        top: "2.5px",
                        left: "130px",
                    })} direction={focus[1] ? "down" : "up"}/>
                    <div css={css({
                        ...cssList.searchBarPosition.text.positionSelected,
                        position: "absolute",
                        top: "23px",
                        left: "60px",
                    })}>
                        {userSearch.champion.name}
                    </div>
                </div>
            </div>
            {focus[0] && <SearchBarPosition newCss={{
                position: "absolute",
                top: "84px",
                left: "31px",
            }} selectedPosition={userSearch.position} setPosition={setPosition}/>}
            {focus[1] &&
                <SearchBarChampion newCss={{
                    position: "absolute",
                    top: "84px",
                    left: "198px",
                    filter: "drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.32))",
                }} champion={userSearch.champion.name} setChampion={setChampion}/>}
        </div>
    );
}
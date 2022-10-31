/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../../assets/colorList";
import championListData from "../../../assets/ChampionList.json";
import ChosungSearch from "hangul-chosung-search-js";
import {useState} from "react";
import {SearchGlassIcon} from "../../foundation/icon1/default/Icon";

const cssList = {
    background: {
        width: "244px",
        height: "253px",
    },
    championList: {
        backPage: {
            width: "244px",
            height: "236px",
            backgroundColor: colorList.semantic.hover,
            borderRadius: "0px 0px 16px 16px",
        },
        champion: {
            position: "absolute",
            marginLeft: "16px",
            paddingRight: "16px",
            width: "212px",
            height: "212px",
            left: "0px",
            top: "24px",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            overflow: "auto",
        }
    },
    searchBar: {
        background: {
            width: "244px",
            height: "33px",
            backgroundColor: colorList.semantic.hover,
            borderRadius: "20px",
        },
        input: {
            backgroundColor: colorList.semantic.hover,
            border: "none",
            ":focus": {
                outline: "none"
            },

        },
        bottom: {
            position: "relative",
            width: "212px",
            height: "0px",
            top: "0px",
            left: "16px",
            borderBottom: "1px solid" + colorList.semantic.card,
        }
    }
}

function searchBar({championName, setChampionName, newCss = {}}) {
    return (
        <div css={css({
            position: "relative",
            ...cssList.searchBar.background,
            ...newCss
        })}>
            <input
                css={css({
                    position: "absolute",
                    left: "16px",
                    top: "8px",
                    ...cssList.searchBar.input
                })}
                type="text"
                value={championName}
                onChange={(e) => setChampionName(e.target.value)}
            />
            <SearchGlassIcon newCss={
                {
                    position: "absolute",
                    top: "8px",
                    left: "212px",
                }
            }/>
        </div>
    )
}

function championList({championName, newCss = {}, champion}) {
    return (
        <div css={css({
            position: "relative",
            ...cssList.championList.backPage,
            ...newCss
        })}>
            <div css={css({
                ...cssList.championList.champion
            })}>{
                championListData.map((championInfo) => {
                    return (
                        ChosungSearch.isSearch(championName, championInfo.name) && (
                            <li css={css({
                                position: "relative",
                                display: "block"
                            })}>
                                <div css={css({
                                    position: "relative",
                                    width: "36px",
                                    height: "36px",
                                })}>
                                    <img
                                        css={css({
                                            position: "absolute",
                                            top: "0px",
                                            left: "0px",
                                            width: "36px",
                                            height: "36px",
                                        })}
                                        src={championInfo.imgUrl}
                                        alt={championInfo.imgUrl}
                                    ></img>
                                    <div css={css({
                                        position: "absolute",
                                        boxSizing: "border-box",
                                        top: "0px",
                                        left: "0px",
                                        width: "36px",
                                        height: "36px",
                                        border: champion === championInfo.name ? `2px solid ${colorList.alpha.gray000_70}` : "none",
                                    })}/>
                                </div>
                            </li>
                        )
                    );
                })}
            </div>
        </div>
    )
}

export function SearchBarChampion({newCss = {}, champion}) {

    const [championName, setChampionName] = useState("");

    return (
        <div css={css({
                ...cssList.background,
                position: "relative",
                ...newCss
            }
        )}>
            {championList({
                championName, newCss: {
                    position: "absolute",
                    top: "17px",
                }, champion
            })}
            {searchBar({championName, setChampionName})}
            <div css={cssList.searchBar.bottom}/>

        </div>
    )
}
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
            backgroundColor: colorList.semantic.card,
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
            gap: "4px",
            overflow: "auto",
            gridTemplateColumns: "repeat(5, 36px)",
            gridTemplateRows: "repeat(5, 36px)",
        },
        img: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "36px",
            height: "36px",
        }
    },
    searchBar: {
        background: {
            width: "244px",
            height: "33px",
            backgroundColor: colorList.semantic.card,
            borderRadius: "20px",
        },
        input: {
            backgroundColor: colorList.semantic.card,
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
            borderBottom: "1px solid" + colorList.grayscale["100"],
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
                    ...cssList.searchBar.input,
                    color: colorList.grayscale["100"],
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

function championList({championName, newCss = {}, champion, setChampion}) {
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
                            <li key={championInfo.id} onClick={() => setChampion(championInfo)} css={css({
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
                                            ...cssList.championList.img
                                        })}
                                        src={championInfo.imgUrl}
                                        alt={championInfo.imgUrl}
                                    ></img>
                                    <div css={css({
                                        boxSizing: "border-box",
                                        ...cssList.championList.img,
                                        border: champion === championInfo.name ? `2px solid ${colorList.main.secondaryBeige}` : "none",
                                        ":hover": {
                                            border: `2px solid ${colorList.alpha.gray000_70}`,
                                        }
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

export function SearchBarChampion({
                                      newCss = {}, champion, setChampion = () => {
    }
                                  }) {
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
                }, champion, setChampion
            })}
            {searchBar({championName, setChampionName})}
            <div css={css({...cssList.searchBar.bottom})}/>

        </div>
    )
}
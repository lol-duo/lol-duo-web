/** @jsxImportSource @emotion/react */
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import championListData from "../../assets/ChampionList.json";
import {DuoTable, SoloTable} from "../organisms/Table";
import colorList from "../../assets/colorList";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {SearchBarChampion, SearchBarPosition} from "../moecules/SearchBarList";
import {SearchImg, SelectLine} from "../atoms/StaticImage";
import {getDuoChampionListResultByApi} from "../../api/api";

const duoMainBody = {
    table: {
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
    },
    searchBar: {
        position: "relative",
        padding: "0px 32px",
        width: "474px",
        height: "76px",
        borderRadius: "100px",
        backgroundColor: colorList.semantic.card,
    },
    searchImg: {
        position: "absolute",
        top: "18.5px",
        left: "212px",
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

    const ChosungSearch = require("hangul-chosung-search-js");
    const [championName, setChampionName] = useState("");

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
    const [duoChampionSelect, setDuoChampionSelect] = useState([{
        id: 0,
        position: "ALL",
        championName: "ALL",
        championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/ALL.svg",
    }, {
        id: 0,
        position: "ALL",
        championName: "ALL",
        championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/ALL.svg",
    }]);

    const settingDuoChampionSelect = (list) => {
        setDropdownList([{position: false, champion: false}, {position: false, champion: false}]);
        list.level === 0 ? setDuoChampionSelect([{
            position: list.position,
            id: list.id,
            championName: list.championName,
            championImgUrl: list.championImgUrl
        }, {
            position: duoChampionSelect[1].position,
            id: duoChampionSelect[1].id,
            championName: duoChampionSelect[1].championName,
            championImgUrl: duoChampionSelect[1].championImgUrl
        }]) : setDuoChampionSelect([{
            position: duoChampionSelect[0].position,
            id: duoChampionSelect[0].id,
            championName: duoChampionSelect[0].championName,
            championImgUrl: duoChampionSelect[0].championImgUrl
        }, {
            position: list.position,
            id: list.id,
            championName: list.championName,
            championImgUrl: list.championImgUrl
        }])
    }


    const [dropdownList, setDropdownList] = useState([{
        position: false,
        champion: false
    }, {
        position: false,
        champion: false
    }]);


    useEffect(() => {
        async function getDuoChampionListResult() {
            const a = await getDuoChampionListResultByApi(duoChampionSelect);
            setDuoChampionListResult(a);
        }

        getDuoChampionListResult().then(r => console.log(r));
    }, [duoChampionSelect]);

    const SearchBar = () => {
        return (<div css={css({
            position: "absolute",
            top: "160px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            zIndex: "100",
        })}>
            <div css={css({
                position: "relative",
            })}>
                <div css={css({
                    ...duoMainBody.searchBar,

                })}>
                    <div onClick={() => setDropdownList([{position: true, champion: false}, {
                        position: false,
                        champion: false
                    }])} css={css({
                        height: "44px",
                        width: "134px",
                    })}>
                        <SearchBarPosition line={duoChampionSelect[0].position}/>

                    </div>
                    <div onClick={() => setDropdownList([{position: false, champion: true}, {
                        position: false,
                        champion: false
                    }])}>
                        <SearchBarChampion src={duoChampionSelect[0].championImgUrl}
                                           name={duoChampionSelect[0].championName}/>
                    </div>
                </div>
                {dropdownList[0].position && PositionDropDown(0)}
                {dropdownList[0].champion && ChampionDropDown(0)}
            </div>
            <div css={css({
                position: "relative",
                left: "12px",
            })}>
                <div css={css({
                    ...duoMainBody.searchBar,

                })}>
                    <div onClick={() => setDropdownList([{position: false, champion: false}, {
                        position: true,
                        champion: false
                    }])} css={css({
                        height: "44px",
                        width: "134px",
                    })}>
                        <SearchBarPosition line={duoChampionSelect[1].position}/>
                    </div>
                    <div onClick={() => setDropdownList([{position: false, champion: false}, {
                        position: false,
                        champion: true
                    }])}>
                        <SearchBarChampion src={duoChampionSelect[1].championImgUrl}
                                           name={duoChampionSelect[1].championName}/>
                    </div>
                </div>
                {dropdownList[1].position && PositionDropDown(1)}
                {dropdownList[1].champion && ChampionDropDown(1)}
            </div>
        </div>)
    }

    const SelectLineInfoByPosition = (position, where) => {
        return {
            level: where,
            position: position,
            id: duoChampionSelect[where].id,
            championName: duoChampionSelect[where].championName
        }
    }

    const SelectLineInfoByChampion = (champion, where) => {
        return {
            level: where,
            position: duoChampionSelect[where].position,
            id: champion.id,
            championName: champion.name,
            championImgUrl: champion.imgUrl
        }
    }

    const onChangeName = (e) => {
        setChampionName(e.target.value);
    };

    const championListli = (where) => championListData.map((c) => {
        return (
            ChosungSearch.isSearch(championName, c.name) && (
                <li css={css({
                    position: "relative",
                    display: "block"
                })}>
                    <img
                        css={css({width: "36px", height: "36px"})}
                        src={c.imgUrl}
                        alt={c.imgUrl}
                        onClick={() => settingDuoChampionSelect(SelectLineInfoByChampion(c, where))}
                    ></img>
                </li>
            )
        );
    });

    const ChampionDropDown = (where) => {
        return (
            <div css={css({
                position: "absolute",
                left: "198px",
                top: "84px",
                width: "244px",
                height: "253px",
            })}>
                <div css={css({
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    width: "244px",
                    height: "53px",
                    backgroundColor: colorList.semantic.hover,
                    borderRadius: "20px",
                    zIndex: "90",
                })}>
                    <div>
                        <input
                            css={css({
                                position: "absolute",
                                left: "16px",
                                top: "18px",
                                backgroundColor: colorList.semantic.hover,
                                border: "none",
                                ":focus": {
                                    outline: "none"
                                }
                            })}
                            type="text"
                            value={championName}
                            onChange={onChangeName}
                        />
                    </div>
                    <div css={css({
                        position: "absolute",
                        boxSizing: "border-box",
                        top: "43px",
                        width: "244px",
                        height: "1px",

                        padding: "0px 16px 0px 16px",
                    })}>
                        <div css={css({
                            backgroundColor: colorList.grayscale["100"],
                            height: "1px",
                        })}/>
                    </div>
                    <SearchImg newCss={duoMainBody.searchImg}/>
                </div>
                <div css={css({
                    position: "absolute",
                    width: "244px",
                    height: "236px",
                    left: "0px",
                    top: "17px",
                    backgroundColor: colorList.semantic.hover,
                    borderRadius: "0px 0px 16px 16px",
                })}>
                    <div css={css({
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
                    })}>{championListli(where)}</div>

                </div>
            </div>
        )
    }

    const PositionDropDown = (where) => {
        return (<div css={css({
            position: "absolute",
            boxSizing: "border-box",
            top: "84px",
            left: "31px",
            display: "flex",
            flexDirection: "row",
            padding: "8px 16px",
            gap: "8px",
            backgroundColor: colorList.semantic.card,
            borderRadius: "100px",
            width: "336px",
            height: "60px",
        })}>
            <div><SelectLine
                onClick={() => settingDuoChampionSelect(SelectLineInfoByPosition("ALL", where))}
                line={"ALL"}/></div>
            <div><SelectLine onClick={() => settingDuoChampionSelect(SelectLineInfoByPosition("TOP", where))}
                             line={"TOP"}/></div>
            <div><SelectLine onClick={() => settingDuoChampionSelect(SelectLineInfoByPosition("JUNGLE", where))}
                             line={"JUNGLE"}/>
            </div>
            <div><SelectLine onClick={() => settingDuoChampionSelect(SelectLineInfoByPosition("MIDDLE", where))}
                             line={"MIDDLE"}/>
            </div>
            <div><SelectLine onClick={() => settingDuoChampionSelect(SelectLineInfoByPosition("BOTTOM", where))}
                             line={"BOTTOM"}/>
            </div>
            <div><SelectLine onClick={() => settingDuoChampionSelect(SelectLineInfoByPosition("SUPPORT", where))}
                             line={"SUPPORT"}/>
            </div>
        </div>)
    }

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
            {SearchBar()}
            <DuoTable newCss={duoMainBody.table} tableInfo={tableInfo}/>
        </div>
    )
}

export function SoloMainBody({newCss = {}}) {

    const ChosungSearch = require("hangul-chosung-search-js");
    const [championName, setChampionName] = useState("");

    const [soloChampionSelect, setSoloChampionSelect] = useState({
        id: 0,
        position: "ALL",
        championName: "ALL",
        championImgUrl: "https://d2d4ci5rabfoyr.cloudfront.net/mainPage/champion/ALL.svg",
    });

    const settingSoloChampionSelect = (list) => {
        console.log(list);
        setDropdownList({position: false, champion: false});
        setSoloChampionSelect({
            id: list.id,
            position: list.position,
            championName: list.championName,
            championImgUrl: list.championImgUrl
        });

    }


    const [dropdownList, setDropdownList] = useState({
        position: false,
        champion: false
    });

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
        console.log("setChampionListResultByApi" + soloChampionSelect.id);
        const apiData = await axios.get(
            "https://api.lolduo.net/v2/soloInfo?championId=" + soloChampionSelect.id + "&position=" + soloChampionSelect.position
        );
        setChampionListResult(apiData.data);
        console.log(apiData.data);
    }, [soloChampionSelect]);

    useEffect(() => {
        setChampionListResultByApi().then(r => console.log(r));
    }, [setChampionListResultByApi]);

    const tableInfo = {
        header: ["Rank", "Champion", "Win Rate"],
        colgroup: ["150px", "238px", "288px"],
        bodyInfo: championListResult,
    }

    const SearchBar = () => {
        return (<div css={css({
            position: "absolute",
            top: "160px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            zIndex: "100",
        })}>
            <div css={css({
                position: "relative",
            })}>
                <div css={css({
                    ...duoMainBody.searchBar,

                })}>
                    <div onClick={() => setDropdownList({position: true, champion: false})} css={css({
                        height: "44px",
                        width: "134px",
                    })}>
                        <SearchBarPosition line={soloChampionSelect.position}/>
                    </div>
                </div>
                <div onClick={() => setDropdownList({position: false, champion: true})}>
                    <SearchBarChampion src={soloChampionSelect.championImgUrl}
                                       name={soloChampionSelect.championName}/>
                </div>
                {dropdownList.position && PositionDropDown()}
                {dropdownList.champion && ChampionDropDown()}
            </div>
        </div>)
    }

    const SelectLineInfoByPosition = (position) => {
        return {
            position: position,
            id: soloChampionSelect.id,
            championName: soloChampionSelect.championName
        }
    }

    const SelectLineInfoByChampion = (champion) => {
        return {
            position: soloChampionSelect.position,
            id: champion.id,
            championName: champion.name,
            championImgUrl: champion.imgUrl
        }
    }

    const onChangeName = (e) => {
        setChampionName(e.target.value);
    };

    const championListli = () => championListData.map((c) => {
        return (
            ChosungSearch.isSearch(championName, c.name) && (
                <li css={css({
                    position: "relative",
                    display: "block"
                })}>
                    <img
                        css={css({width: "36px", height: "36px"})}
                        src={c.imgUrl}
                        alt={c.imgUrl}
                        onClick={() => settingSoloChampionSelect(SelectLineInfoByChampion(c))}
                    ></img>
                </li>
            )
        );
    });

    const ChampionDropDown = () => {
        return (
            <div css={css({
                position: "absolute",
                left: "198px",
                top: "84px",
                width: "244px",
                height: "253px",
            })}>
                <div css={css({
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    width: "244px",
                    height: "53px",
                    backgroundColor: colorList.semantic.hover,
                    borderRadius: "20px",
                    zIndex: "90",
                })}>
                    <div>
                        <input
                            css={css({
                                position: "absolute",
                                left: "16px",
                                top: "18px",
                                backgroundColor: colorList.semantic.hover,
                                border: "none",
                                ":focus": {
                                    outline: "none"
                                }
                            })}
                            type="text"
                            value={championName}
                            onChange={onChangeName}
                        />
                    </div>
                    <div css={css({
                        position: "absolute",
                        boxSizing: "border-box",
                        top: "43px",
                        width: "244px",
                        height: "1px",

                        padding: "0px 16px 0px 16px",
                    })}>
                        <div css={css({
                            backgroundColor: colorList.grayscale["100"],
                            height: "1px",
                        })}/>
                    </div>
                    <SearchImg newCss={duoMainBody.searchImg}/>
                </div>
                <div css={css({
                    position: "absolute",
                    width: "244px",
                    height: "236px",
                    left: "0px",
                    top: "17px",
                    backgroundColor: colorList.semantic.hover,
                    borderRadius: "0px 0px 16px 16px",
                })}>
                    <div css={css({
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
                    })}>{championListli()}</div>

                </div>
            </div>
        )
    }

    const PositionDropDown = () => {
        return (<div css={css({
            position: "absolute",
            boxSizing: "border-box",
            top: "84px",
            left: "31px",
            display: "flex",
            flexDirection: "row",
            padding: "8px 16px",
            gap: "8px",
            backgroundColor: colorList.semantic.card,
            borderRadius: "100px",
            width: "336px",
            height: "60px",
        })}>
            <div><SelectLine
                onClick={() => settingSoloChampionSelect(SelectLineInfoByPosition("ALL"))}
                line={"ALL"}/></div>
            <div><SelectLine onClick={() => settingSoloChampionSelect(SelectLineInfoByPosition("TOP"))}
                             line={"TOP"}/></div>
            <div><SelectLine onClick={() => settingSoloChampionSelect(SelectLineInfoByPosition("JUNGLE"))}
                             line={"JUNGLE"}/>
            </div>
            <div><SelectLine onClick={() => settingSoloChampionSelect(SelectLineInfoByPosition("MIDDLE"))}
                             line={"MIDDLE"}/>
            </div>
            <div><SelectLine onClick={() => settingSoloChampionSelect(SelectLineInfoByPosition("BOTTOM"))}
                             line={"BOTTOM"}/>
            </div>
            <div><SelectLine onClick={() => settingSoloChampionSelect(SelectLineInfoByPosition("SUPPORT"))}
                             line={"SUPPORT"}/>
            </div>
        </div>)
    }

    return (
        <div css={css({
            color: colorList.semantic.background,
            ...newCss
        })}>
            {SearchBar()}
            <SoloTable newCss={soloMainBody.table} tableInfo={tableInfo}/>
        </div>
    )
}
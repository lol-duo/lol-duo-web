/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../../assets/colorList";
import fontList from "../../../assets/fontList";
import {IconSIze24, ItemIcon} from "../../foundation/icon1/default/Icon";

const display = {
    column: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
}

const cssList = {
    background: {
        ...display.column,
        justifyContent: "center",
        backgroundColor: colorList.semantic.card,
        padding: "0px 12px",
        gap: "48px",
        width: "437px",
        height: "364px",
    },
    spellAndItem: {
        ...display.row,
        justifyContent: "space-between",
        alignItems: "flex-start",
        boxSizing: "border-box",
        padding: "0px 24px",
        width: "413px",
        height: "54px",
    },
    spell: {
        ...display.column,
        alignItems: "flex-start",
        padding: "0px",
        gap: "16px",
        width: "72px",
        height: "54px",
    },
    spellIcon: {
        ...display.row,
        padding: "0px",
        gap: "24px",

        width: "72px",
        height: "24px",
    },
    item: {
        ...display.column,
        alignItems: "flex-start",
        padding: "0px",
        gap: "16px",
        width: "200px",
        height: "54px"
    },
    itemIcon: {
        ...display.row,
        padding: "0px",
        gap: "24px",
        width: "200px",
        height: "24px",
    },
    rune: {
        ...display.column,
        alignItems: "flex-start",
        gap: "24px",
        width: "400px",
        height: "198px",
    },
    runeIcon: {
        ...display.row,
        justifyContent: "center",
        gap: "32px",
        width: "352px",
        height: "160px",
    },
    runeIconMain: {
        background: {
            ...display.column,
            gap: "12px",
            width: "160px",
            height: "160px",
        },
        subRuneList: {
            background: {
                ...display.column,
                gap: "12px",
                width: "159px",
                height: "124px",
            },
            mainRune: {
                ...display.row,
                justifyContent: "space-between",
                height: "24px",
            },
            subRuneList: {
                ...display.column,
                gap: "8px",
                width: "120px",
                height: "88px",
            },
            subRune: {
                ...display.row,
                alignItems: "flex-start",
                justifyContent: "space-between",
                width: "120px",
                height: "24px",
            }
        }
    },
    runeIconSub: {
        background: {
            ...display.column,
            gap: "16px",
            width: "120px",
            height: "160px",
        },
        subRuneList: {
            background: {
                ...display.column,
                gap: "24px",
                alignItems: "flex-start",
                width: "120px",
                height: "120px",
            },
            rune: {
                ...display.row,
                justifyContent: "space-between",
                width: "120px",
                height: "24px",
            }
        }
    }
}


export function DuoTable({newCss = {}, detailInfo}) {
    return (
        <div css={css({
            ...cssList.background,
            ...newCss,
        })}>
            <div css={css({
                ...cssList.spellAndItem,
            })}>
                <div css={css({
                    ...cssList.spell,
                })}>
                    <div css={css({
                        width: "28p",
                        height: "14px",
                        ...fontList.roboto.regular["12"],
                        color: colorList.grayscale["200"],
                    })}>Spell
                    </div>
                    <div css={css({
                        ...cssList.spellIcon,
                    })}>
                        <IconSIze24 src={detailInfo.detailSpell.firstSpell}/>
                        <IconSIze24 src={detailInfo.detailSpell.secondSpell}/>
                    </div>
                </div>
                <div css={css({
                    ...cssList.item,
                })}>
                    <div css={css({
                        width: "28p",
                        height: "14px",
                        ...fontList.roboto.regular["12"],
                        color: colorList.grayscale["200"],
                    })}>
                        Item Builds
                    </div>
                    <div css={css({
                        ...cssList.itemIcon,
                    })}>
                        <IconSIze24 src={detailInfo.detailItem.firstItem}/>
                        <ItemIcon/>
                        <IconSIze24 src={detailInfo.detailItem.secondItem}/>
                        <ItemIcon/>
                        <IconSIze24 src={detailInfo.detailItem.thirdItem}/>
                    </div>
                </div>

            </div>
            <div css={css({
                ...cssList.rune,
            })}>
                <div css={css({
                    width: "35p",
                    height: "14px",
                    left: "24px",
                    position: "relative",
                    ...fontList.roboto.regular["12"],
                    color: colorList.grayscale["200"],
                })}>
                    Runes
                </div>
                <div css={css({
                    ...cssList.runeIcon,
                })}>
                    <div css={css({
                        ...cssList.runeIconMain.background,
                    })}>
                        <IconSIze24 src={detailInfo.detailRune.mainRuneImgUrl}/>
                        <div css={css({
                            ...cssList.runeIconMain.subRuneList.background,
                        })}>
                            <div css={css({
                                ...cssList.runeIconMain.subRuneList.mainRune,
                                width: detailInfo.detailRune.mainRuneList1.length === 3 ? "120px" : "159px",
                            })}>
                                {detailInfo.detailRune.mainRuneList1.map((item, index) => {
                                    return (
                                        <IconSIze24 key={item + index} src={item}/>
                                    )
                                })}
                            </div>
                            <div css={css({
                                ...cssList.runeIconMain.subRuneList.subRuneList,
                            })}>
                                <div css={css({
                                    ...cssList.runeIconMain.subRuneList.subRune,
                                })}>
                                    {detailInfo.detailRune.mainRuneList2.map((item, index) => {
                                        return (
                                            <IconSIze24 key={item + index} src={item}/>
                                        )
                                    })}
                                </div>
                                <div css={css({
                                    ...cssList.runeIconMain.subRuneList.subRune,
                                })}>
                                    {detailInfo.detailRune.mainRuneList3.map((item, index) => {
                                        return (
                                            <IconSIze24 key={item + index} src={item}/>
                                        )
                                    })}
                                </div>
                                <div css={css({
                                    ...cssList.runeIconMain.subRuneList.subRune,
                                })}>
                                    {detailInfo.detailRune.mainRuneList4.map((item, index) => {
                                        return (
                                            <IconSIze24 key={item + index} src={item}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div css={css({
                        ...cssList.runeIconSub.background,
                    })}>
                        <IconSIze24 src={detailInfo.detailRune.subRuneImgUrl}/>
                        <div css={css({
                            ...cssList.runeIconSub.subRuneList.background,
                        })}>
                            <div css={css({
                                ...cssList.runeIconSub.subRuneList.rune,
                            })}>
                                {detailInfo.detailRune.subRuneList1.map((item, index) => {
                                    return (
                                        <IconSIze24 key={item + index} src={item}/>
                                    )
                                })}
                            </div>
                            <div css={css({
                                ...cssList.runeIconSub.subRuneList.rune,
                            })}>
                                {detailInfo.detailRune.subRuneList2.map((item, index) => {
                                    return (
                                        <IconSIze24 key={item + index} src={item}/>
                                    )
                                })}
                            </div>
                            <div css={css({
                                ...cssList.runeIconSub.subRuneList.rune,
                            })}>
                                {detailInfo.detailRune.subRuneList3.map((item, index) => {
                                    return (
                                        <IconSIze24 key={item + index} src={item}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
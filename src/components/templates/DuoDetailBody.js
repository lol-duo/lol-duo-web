/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import qs from "qs";
import {useCallback, useEffect, useState} from "react";
import {getDuoChampionDetailListResultByApi} from "../../api/api";
import colorList from "../../assets/colorList";
import {Champion} from "../atoms/table_atoms/Champion";
import {DetailRank} from "../pattern/Detail/DetailRank";
import {DuoTable} from "../pattern/Detail/DuoTable";


export function DuoDetailBody({newCss = {}}) {
    const [duoDetail, setDuoDetail] = useState({
        detailChampionComp1: {},
        detailChampionComp2: {},
    });

    const query = qs.parse(window.location.search, {
        ignoreQueryPrefix: true // ? 없애기
    });

    const callApi = useCallback((id) => {
        getDuoChampionDetailListResultByApi({
            setDuoDetailState: setDuoDetail,
            id: id
        });
    }, []);


    useEffect(() => {
        callApi(query.id);
    }, [callApi, query.id]);

    return (
        <div css={
            css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                ...newCss
            })}>
            <div css={css({
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colorList.semantic.card,
                gap: "94px",
                width: "964px",
                height: "118px",
            })}>
                <div css={css({
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "16px 12px",
                    gap: "16px",
                    width: "435px",
                    height: "118px",
                })}>
                    <Champion championInfo={duoDetail.detailChampionComp1}
                              isSolo={false}
                              size="big"
                              newCss={{
                                  top: "12px",
                              }}
                    />
                </div>
                <div css={css({
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "16px 12px",
                    gap: "16px",
                    width: "435px",
                    height: "118px",
                })}>
                    <Champion championInfo={duoDetail.detailChampionComp2}
                              isSolo={false}
                              size="big"
                              newCss={{
                                  top: "12px",
                              }}
                    />
                </div>

            </div>
            {duoDetail.detailDoubleList && duoDetail.detailDoubleList.map((detailDuo, index) => {
                return (
                    <div key={index} css={css({
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "964px",
                        height: "364px",
                        gap: "4px",
                    })}>
                        <DuoTable newCss={{width: "413px"}} detailInfo={detailDuo.detailInfo1}/>
                        <DetailRank detailRankWinRate={detailDuo.detailRankWinRate}/>
                        <DuoTable newCss={{width: "413px"}} detailInfo={detailDuo.detailInfo2}/>
                    </div>
                )
            })}
        </div>
    )
}
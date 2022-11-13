/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import qs from "qs";
import {useCallback, useEffect, useState} from "react";
import {getSoloChampionDetailListResultByApi} from "../../api/api";
import {Champion} from "../atoms/table_atoms/Champion";
import colorList from "../../assets/colorList";
import {DetailRank} from "../pattern/Detail/DetailRank";
import {DuoTable} from "../pattern/Detail/DuoTable";

export function SoloDetailBody({newCss = {}}) {
    const query = qs.parse(window.location.search, {
        ignoreQueryPrefix: true // ? 없애기
    });

    const [soloDetail, setSoloDetail] = useState({
        detailChampionComp: {}
    });
    const callApi = useCallback((id) => {
        getSoloChampionDetailListResultByApi({
            setSoloDetailState: setSoloDetail,
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
                flexDirection: "column",
                alignItems: "center",
                top: "16px",
                backgroundColor: colorList.semantic.card,
                width: "960px",
                height: "110px",
            })}>
                <Champion championInfo={soloDetail.detailChampionComp}
                          isSolo={false}
                          size="big"
                          newCss={{
                              top: "12px",
                          }}
                />
            </div>
            {soloDetail.detailSoloList && soloDetail.detailSoloList.map((detailSolo, index) => {
                return (
                    <div key={index} css={css({
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "960px",
                        height: "360px",
                        gap: "4px",
                    })}>
                        <DetailRank detailRankWinRate={detailSolo.detailRankWinRate}/>
                        <DuoTable newCss={{width: "874px"}} detailInfo={detailSolo.detailInfo}/>
                    </div>
                )
            })}
        </div>
    )
}
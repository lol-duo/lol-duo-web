/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import qs from "qs";
import {useEffect, useState} from "react";
import {getSoloChampionDetailListResultByApi} from "../../api/api";

export function SoloDetailBody({newCss = {}}) {
    const query = qs.parse(window.location.search, {
        ignoreQueryPrefix: true // ? 없애기
    });

    const [soloDetailChampionListResult, setSoloDetailChampionListResult] = useState(
        {}
    );

    const callApi = async (id) => {
        getSoloChampionDetailListResultByApi({
            setSoloChampionDetailListResult: setSoloDetailChampionListResult,
            id: id
        });
    }

    useEffect(() => {
        callApi(query.id).then(() => console.log(soloDetailChampionListResult));
    }, [query, soloDetailChampionListResult]);


    return (
        <div css={
            css({})}>
        </div>
    )
}
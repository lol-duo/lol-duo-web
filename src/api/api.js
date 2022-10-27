import axios from "axios";


export async function getDuoChampionListResultByApi(duoChampionSelect) {
    let apiData = await axios.get(
        "https://api.lolduo.net/v2/doubleInfo?championId=" + duoChampionSelect[0].id + "&championId2=" + duoChampionSelect[1].id + "&position=" + duoChampionSelect[0].position + "&position2=" + duoChampionSelect[1].position
    )
    return apiData.data;
}


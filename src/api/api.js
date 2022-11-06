import axios from "axios";
import assets from "../assets/assets";

function getPositionName(position) {
    switch (position) {
        case assets.position.all:
            return "ALL";
        case assets.position.top:
            return "TOP";
        case assets.position.jungle:
            return "JUNGLE";
        case assets.position.middle:
            return "MIDDLE";
        case assets.position.bottom:
            return "BOTTOM";
        default:
            return "UTILITY";
    }
}

export function getSoloChampionListResultByApi({setSoloChampionListResult, id, position}) {
    position = getPositionName(position);
    axios.get("https://api.lolduo.net/v2/soloInfo?championId=" + id + "&position=" + position)
        .then((response) => {
            setSoloChampionListResult(response.data);
        }).catch((error) => {
            console.log(error);
        }
    )
}

export function getDuoChampionListResultByApi({setDuoChampionListResult, id1, id2, position1, position2}) {
    position1 = getPositionName(position1);
    position2 = getPositionName(position2);
    axios.get("https://api.lolduo.net/v2/doubleInfo?championId=" + id1 + "&championId2=" + id2 + "&position=" + position1 + "&position2=" + position2)
        .then((response) => {
            setDuoChampionListResult(response.data);
        }).catch((error) => {
            console.log(error);
        }
    )
}


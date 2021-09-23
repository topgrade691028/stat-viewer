import {servers} from "../consts/servers";

const liveStatsLoader = (id) => {
    return fetch(servers.filter(s => s.id === id)[0].api + "get_live_game_stats")
        .then(resp => resp.json())
}

export default liveStatsLoader;
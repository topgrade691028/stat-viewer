import {useEffect, useState} from "react";

const Stats = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        fetch("http://pkka2.pkkawebpanel2.ru:7012/api/get_live_game_stats")
            .then(r => r.json())
            .then(d => setStats(d.result.stats));
    }, []);

    return <div>{stats.map(s => s.player)}</div>;
}

export default Stats;
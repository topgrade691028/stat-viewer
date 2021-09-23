import {useEffect, useState} from "react";
import {Divider, Space} from "antd";
import StatsTable from "./StatsTable";
import KillTable from "./KillTable";

const Tracker = ({player, serverStats}) => {
    const [playerStats, setPlayerStats] = useState(undefined);

    useEffect(() => {
            let filteredArray = serverStats.filter(p => p.player === player);
            setPlayerStats(filteredArray.length > 0 ? filteredArray[0] : undefined);
    }, [player, serverStats]);

    return playerStats !== undefined ? <div style={{width: "100%"}}><PlayerStats playerStats={playerStats}/></div>: <>Ничего не найдено. Попробуйте поменять сервер</>;
}

const PlayerStats = ({playerStats}) => {
    return <Space direction="vertical"  style={{width: "100%"}}>
        <a href={playerStats.steaminfo.profile.profileurl}>Steam URL</a>
        <StatsTable dataSource={[playerStats]} />
        <div style={{display: 'flex', justifyContent: "space-between", margin: "10px"}}>
            <KillTable header={<div style={{fontWeight: "bolder"}}>Убил</div>} data={Object.entries(playerStats.most_killed)}/>
            <Divider type="vertical" style={{height: "100%"}}/>
            <KillTable header={<div style={{fontWeight: "bolder"}}>Убит от</div>} data={Object.entries(playerStats.death_by)}/>
        </div>
    </Space>

}

export default Tracker;
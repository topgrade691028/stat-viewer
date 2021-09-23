import StatsTable from "./StatsTable";
import {useEffect, useState} from "react";
import Search from "antd/es/input/Search";
import {Space} from "antd";




const PlayerNameSearchInput = ({searchInput, setSearchInput, onSearch}) => {
    return <Search value={searchInput} onChange={e => setSearchInput(e.target.value)} onSearch={onSearch}/>
}

const LiveStatsTable = ({serverStats, onPlayerClick}) => {

    const [currentDataSource, setCurrentDataSource] = useState(serverStats);
    const [searchInput, setSearchInput] = useState("");

    const searchInDataSource = (dataSource, text) => {
        return dataSource.filter(stat => stat.player.startsWith(text));
    }

    useEffect(() => {
        if (searchInput === "") {
            setCurrentDataSource(serverStats);
        } else {
            setCurrentDataSource(searchInDataSource(serverStats, searchInput));
        }
    }, [serverStats, searchInput]);

    const onSearch = (val) => {
        // if (val === "") {
        //     setCurrentDataSource(serverStats);
        // } else {
        //     setCurrentDataSource(searchInDataSource(serverStats, val));
        // }
    }



    return <div>
        <Space direction={"vertical"} style={{width: "100%"}}>
            <PlayerNameSearchInput searchInput={searchInput} setSearchInput={setSearchInput} onSearch={onSearch}/>
            <StatsTable dataSource={currentDataSource} onPlayerClick={onPlayerClick}/>
        </Space>

    </div>;
}

export default LiveStatsTable;
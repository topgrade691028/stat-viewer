import './App.css';
import Tracker from "./components/Tracker";
import {useEffect, useState} from "react";
import {AutoComplete, Col, Row, Space} from "antd";
import LiveStatsTable from "./components/LiveStatsTable";
import liveStatsLoader from "./scripts/liveStatsLoader";
import ServersInfo from "./components/ServersInfo";
import {Route, Switch, useHistory} from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";

function App() {
    const [trackerName, setTrackerName] = useState("");
    const [serverId, setServerId] = useState(0);
    const [serverStats, setServerStats] = useState([]);

    const [updateInterval, setUpdateInterval] = useState(null);


    useEffect(() => {
        if (updateInterval !== null) {
            clearInterval(updateInterval);
        }
        let newUpdateInterval = setInterval(() => {
            liveStatsLoader(serverId)
                .then(d => {
                    setServerStats(d.result.stats);
                });
        }, 5000);

        setUpdateInterval(newUpdateInterval);

        liveStatsLoader(serverId)
            .then(d => {
                setServerStats(d.result.stats);
            }).catch(e => console.log(e));

    }, [serverId]);


    const [searchOptions, setSearchOptions] = useState([]);
    const [searchVal, setSearchVal] = useState("");

    useEffect(() => {
        setSearchOptions(serverStats.filter(p => p.player.startsWith(searchVal)).map(p => {
            return {value: p.player}
        }));
    }, [searchVal, serverStats])

    const onSearch = (value) => {
        setTrackerName(value);
        setSearchVal("");
    }

    const history = useHistory();
    useEffect(() => {
        history.push("stats");
    }, [history]);

    const onPlayerClick = (player) => {
        console.log("On player click")
        setTrackerName(player);
        history.push("tracker");
    }

    return (
        <div style={{paddingBottom: "40px"}}>

            <HeaderMenu serverId={serverId} onSetServerId={setServerId}/>

            <Row style={{marginTop: "40px"}}>
                <Col span={20} offset={2}>
                    <Switch>
                        <Route path="/tracker">
                            <Space direction="vertical" style={{width: "100%"}}>
                                <AutoComplete options={searchOptions} placeholder="Nickname" onSearch={setSearchVal}
                                              onChange={onSearch} style={{width: 400}} defaultValue={trackerName}/>
                                <Tracker player={trackerName} serverStats={serverStats}/>
                            </Space>
                        </Route>
                        <Route path="/stats">
                            <LiveStatsTable serverStats={serverStats} onPlayerClick={onPlayerClick}/>
                        </Route>
                        <Route path="/servers_info">
                            <ServersInfo/>
                        </Route>
                    </Switch>

                </Col>
            </Row>
        </div>


    );
}

export default App;

import {useEffect, useState} from "react";
import {servers} from "../consts/servers";
import loadPublicInfo from "../scripts/loadPublicInfo";
import ServerTable from "./ServerTable";

const ServersInfo = () => {

    const [serversInfo, setServersInfo] = useState([]);

    const addServerInfo = (serverInfo) => {
        serversInfo.push(serverInfo);
        setServersInfo([...serversInfo]);
    }

    useEffect(() => {
        servers
            .forEach(server => loadPublicInfo(server.api).then(data => addServerInfo(data.result)));

        // Promise.all(servers.map(s => loadPublicInfo(s.api)))
        //     .then(resps => Promise.all(resps.map(resp => resp.result)))
        //     .then(data => setServersInfo(data));
    }, [servers]);

    return <>
        <ServerTable serversInfo={serversInfo} />
    </>
}

export default ServersInfo;
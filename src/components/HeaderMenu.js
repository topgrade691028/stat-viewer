import {Menu, Select} from "antd";
import {servers} from "../consts/servers";
import {Option} from "antd/es/mentions";
import {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";

const HeaderMenu = (props) => {
    const location = useLocation();
    const [menuState, setMenuState] = useState(location.pathname);

    useEffect(() => {
        setMenuState(location.pathname);
    }, [location])

    const router = useHistory();

    return <Menu mode="horizontal" selectedKeys={[menuState]} onSelect={e => {
        router.push(e.key);
    }}>
        <Menu.Item key="/tracker">
            Трекер
        </Menu.Item>
        <Menu.Item key="/stats">
            Общая статистика <img width={20}
                                  src={"data:image/svg+xml,%3Csvg height='464pt' viewBox='0 -88 464 464' width='464pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.0703125 256.703125c.3828125 17.371094 14.5546875 31.261719 31.9296875 31.296875h400c17.671875 0 32-14.328125 32-32v-220.550781zm0 0' fill='%23ff3051'/%3E%3Cpath d='m464 32c0-17.671875-14.328125-32-32-32h-400c-17.671875 0-32 14.328125-32 32v224c0 .238281.0625.464844.0703125.703125l463.9296875-221.253906zm0 0' fill='%23ff4764'/%3E%3Cg fill='%23f1f2f2'%3E%3Cpath d='m128 200h-56v-120c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v128c0 4.417969 3.582031 8 8 8h64c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0'/%3E%3Cpath d='m400 88c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-64c-4.417969 0-8 3.582031-8 8v128c0 4.417969 3.582031 8 8 8h64c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-56v-48h40c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-40v-48zm0 0'/%3E%3Cpath d='m168 72c-4.417969 0-8 3.582031-8 8v128c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-128c0-4.417969-3.582031-8-8-8zm0 0'/%3E%3Cpath d='m298.808594 72.503906c-1.988282-.746094-4.191406-.671875-6.125.207032-1.933594.878906-3.4375 2.492187-4.179688 4.480468l-39.816406 106.191406-33.046875-105.78125c-1.324219-4.222656-5.820313-6.566406-10.039063-5.242187-4.222656 1.324219-6.566406 5.820313-5.242187 10.039063l40 128c1.023437 3.261718 4.003906 5.507812 7.417969 5.601562h.222656c3.335938.003906 6.324219-2.066406 7.496094-5.191406l48-128c.746094-1.988282.671875-4.191406-.207032-6.125-.878906-1.933594-2.492187-3.4375-4.480468-4.179688zm0 0'/%3E%3C/g%3E%3C/svg%3E"}
                                  alt={""}/>
        </Menu.Item>

        <Menu.Item key={"/servers_info"}>
            Информация о серверах
        </Menu.Item>

        <Menu.Item key="serverChoose" disabled style={{marginLeft: "auto"}}>
            <Select style={{width: "200px"}} onSelect={props.onSetServerId} defaultValue={props.serverId}>
                {servers.map(server => <Option value={server.id}>{server.serverName}</Option>)}
            </Select>
        </Menu.Item>
    </Menu>
}


export default HeaderMenu;
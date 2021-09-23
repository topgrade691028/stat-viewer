import {Table} from "antd";

const ServerTable = ({serversInfo}) => {

    const columns = [
        {
            title: "Сервер",
            dataIndex: "short_name",
            key: "server"
        },
        {
            title: "Текущая карта",
            key: "current_map",
            render: (text, record) => <div>{record.current_map.human_name}</div>
        }, {
            title: "Количество игроков",
            dataIndex: "nb_players",
            key: "nb_players"
        }, {
            title: "Следующая карта",
            dataIndex: "next_map",
            key: "next_map"
        }
    ]

    return <Table columns={columns} dataSource={serversInfo} pagination={false}/>
}

export default ServerTable;
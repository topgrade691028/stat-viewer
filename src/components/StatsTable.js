import {Table} from "antd";
import Avatar from "antd/es/avatar/avatar";

const StatsTable = ({dataSource, onPlayerClick}) => {


    const columns = [
        {
            title: <div style={{display: 'flex', justifyContent: "space-around"}}>Место</div>,
            key: 'index',
            render : (text, record, index) => <div style={{display: 'flex', justifyContent: "space-around"}}>{index + 1}</div>,
        },
        {
            title: <div>Игрок</div>,
            dataIndex: 'player',
            key: 'player',
            render: (text, record) => <div style={{cursor: 'pointer'}} onClick={() => onPlayerClick(text)}>
                <Avatar src={record.steaminfo.profile.avatar} />
                <span style={{marginLeft: "10px", fontWeight: "bold"}}>
                    {text}
                </span>
            </div>,
        },
        {
            title: 'Убийства',
            dataIndex: 'kills',
            key: 'kills',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.kills - b.kills
        },
        {
            title: 'Смертей',
            dataIndex: 'deaths',
            key: 'deaths',
            sorter: (a, b) => a.deaths - b.deaths
        },
        {
            title: 'КД',
            dataIndex: 'kill_death_ratio',
            key: 'kill_death_ratio',
            sorter: (a, b) => a.kill_death_ratio - b.kill_death_ratio
        },

        {
            title: 'Убийств в минуту',
            dataIndex: 'kills_per_minute',
            key: 'kills_per_minute',
            sorter: (a, b) => a.kills_per_minute - b.kills_per_minute
        },
        {
            title: 'Кил-стрик (наиболь.)',
            dataIndex: 'kills_streak',
            key: 'kills_streak',
            sorter: (a, b) => a.kills_streak - b.kills_streak
        },
    ];

    return <div>
        <Table dataSource={dataSource} columns={columns} pagination={false}  size={"small"}/>
    </div>;
}

export default StatsTable;
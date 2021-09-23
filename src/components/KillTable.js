import {List} from "antd";

const KillTable = ({header, data}) => {
    return <List
        itemLayout="horizontal"
        dataSource={data}
        style={{width: "800px"}}
        header={header}
        size={"small"}
        renderItem={item => (
            <List.Item>
                <div style={{justifyContent: "space-between", display: "flex", width: "80%"}}>
                    <div>{item[0]}</div>
                    <div>{item[1]}</div>
                </div>
            </List.Item>
        )}
    />
}

export default KillTable;
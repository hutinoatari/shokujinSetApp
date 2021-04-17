import { FC, useState } from "react";
import { tableDataType, tableDatas } from "../datas/tableData";
import {
    menuDataType,
    menuDatas,
    dayMenuDatas,
    weekMenuDatas,
} from "../datas/menuData";

const Order: FC<{}> = () => {
    const [order, setOrder] = useState<string>("");
    const [orders, setOrders] = useState<string[]>([]);
    const [tableNum, setTableNum] = useState<string>("");
    
    return (
        <>
            <h2>選択</h2>
            <div>
                <label>
                    メニュー:
                    <select
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                    >
                        <option value="">未選択</option>
                        <optgroup label="定食">
                            {menuDatas.map(
                                (menuData: menuDataType, i: number) => (
                                    <option
                                        key={`menu-${i}`}
                                        value={menuData.orderName}
                                    >
                                        {menuData.name}
                                    </option>
                                )
                            )}
                        </optgroup>
                        <optgroup label="曜替わり定食">
                            {dayMenuDatas[new Date().getDay()].map(
                                (menuData: menuDataType, i: number) => (
                                    <option
                                        key={`dayMenu-${i}`}
                                        value={menuData.orderName}
                                    >
                                        {menuData.name}
                                    </option>
                                )
                            )}
                        </optgroup>
                        <optgroup label="週替わり定食">
                            {weekMenuDatas.map(
                                (menuData: menuDataType, i: number) => (
                                    <option
                                        key={`weekMenu-${i}`}
                                        value={menuData.orderName}
                                    >
                                        {menuData.name}
                                    </option>
                                )
                            )}
                        </optgroup>
                    </select>
                </label>
            </div>

            <div>
                <button
                    onClick={(e) => {
                        if (order === "") return;
                        const newOrders = [...orders];
                        newOrders.push(order);
                        setOrder("");
                        setOrders(newOrders);
                    }}
                >
                    追加
                </button>
            </div>

            <h2>注文リスト</h2>
            <label>
                机:
                <select
                    value={tableNum}
                    onChange={(e) => setTableNum(e.target.value)}
                >
                    <option value="">未選択</option>
                    {tableDatas.map((tableData: tableDataType, i: number) => (
                        <option key={`table-${i}`} value={tableData.orderName}>
                            {tableData.name}
                        </option>
                    ))}
                </select>
            </label>
            <ol>
                {orders.map((e, i) => (
                    <li key={`order-${i}`}>{e}</li>
                ))}
            </ol>

            <h2>送信</h2>
            <button
                onClick={(e) => {
                    if (tableNum === "") {
                        alert("テーブル番号を入力して下さい。");
                        return;
                    }
                    if (orders.length === 0) {
                        alert("メニューを入力して下さい。");
                        return;
                    }
                    if (
                        !window.confirm(
                            '注文を決定しますか？\n("はい"を押すとLINEを開きます。)'
                        )
                    )
                        return;
                    const orderText = `${tableNum}\n${orders.join("\n")}`;
                    const url = `https://line.me/R/msg/text/?${encodeURI(
                        orderText
                    )}`;
                    window.open(url, "_blank");
                }}
            >
                LINEする
            </button>
        </>
    );
};

export default Order;

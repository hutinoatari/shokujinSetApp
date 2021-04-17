import { FC } from "react";
import { tableDataType, tableDatas } from "../datas/tableData";
import {
    menuDataType,
    menuDatas,
    dayMenuDatas,
    weekMenuDatas,
} from "../datas/menuData";

const Order: FC<{}> = () => {
    return (
        <>
            <h2>選択</h2>
            <div>
                <label>
                    メニュー:
                    <select>
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
                <button>追加</button>
            </div>

            <h2>注文リスト</h2>
            <label>
                机:
                <select>
                    <option value="">未選択</option>
                    {tableDatas.map((tableData: tableDataType, i: number) => (
                        <option key={`table-${i}`} value={tableData.orderName}>
                            {tableData.name}
                        </option>
                    ))}
                </select>
            </label>
            <ol></ol>

            <h2>送信</h2>
            <button>LINEする</button>
        </>
    );
};

export default Order;

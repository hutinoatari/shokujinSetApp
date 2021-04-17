import { FC } from "react";
import { menuDataType, menuDatas, dayMenuDatas } from "../datas/menuData";

const Menu: FC<{}> = () => {
    return (
        <>
            <h2>定食メニュー</h2>
            <ul>
                {menuDatas.map((menuData: menuDataType, i: number) => (
                    <li key={`set-${i}`}>{menuData.name}</li>
                ))}
            </ul>

            <h2>曜替わり定食メニュー</h2>
            <p>日曜メニューは土曜日に注文可能です。</p>
            <ul>
                {dayMenuDatas.map((menus: menuDataType[], i: number) =>
                    menus.map((menu: menuDataType, j: number) => (
                        <li key={`daySet-${i}-${j}`}>{menu.name}</li>
                    ))
                )}
            </ul>
        </>
    );
};

export default Menu;

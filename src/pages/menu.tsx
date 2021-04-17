import { FC } from "react";
import {
    menuDataType,
    menuDatas,
    dayMenuDatas,
    weekMenuDatas,
} from "../datas/menuData";

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

            <h2>週替わり定食メニュー</h2>
            <p>
                メニューは
                <a
                    href="https://twitter.com/search?q=%23%E9%A3%9F%E7%A5%9E%E9%80%B1%E6%9B%BF%E3%82%8F%E3%82%8A%E5%AE%9A%E9%A3%9F%20from%3A%40shokujinjp&f=live"
                    target="_blank"
                    rel="noreferrer"
                >
                    Twitter
                </a>
                でご確認ください。
            </p>
            <ul>
                {weekMenuDatas.map((menuData: menuDataType, i: number) => (
                    <li key={`weekSet-${i}`}>{menuData.name}</li>
                ))}
            </ul>
        </>
    );
};

export default Menu;

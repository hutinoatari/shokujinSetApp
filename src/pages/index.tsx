import { FC } from "react";

const Top: FC<{}> = () => {
    return (
        <>
            <h2>店舗情報</h2>
            <p>
                Twitter(
                <a
                    href="https://twitter.com/shokujinjp"
                    target="_blank"
                    rel="noreferrer"
                >
                    @shokujinjp
                </a>
                )
            </p>

            <h2>営業時間</h2>
            <p>
                日曜定休
                <br />
                11:30 - 15:00
                <br />
                17:00 - <del>23:00</del>{" "}
                <ins>20:00 (まん延防止等重点措置 4/12 - 5/11)</ins>
            </p>

            <h2>お願い</h2>
            <p>
                メニューの抜けなど見つけましたら淵野アタリ(
                <a
                    href="https://twitter.com/ebioishii_u"
                    target="_blank"
                    rel="noreferrer"
                >
                    @ebioishii_u
                </a>
                )までお知らせ下さい。随時修正します。
            </p>
        </>
    );
};

export default Top;

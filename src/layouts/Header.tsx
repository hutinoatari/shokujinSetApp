import { FC } from "react";
import Link from "next/link";

const Header: FC<{}> = () => {
    return (
        <header style={{ textAlign: "center", backgroundColor: "yellow" }}>
            <h1 style={{ color: "red" }}>食神セタップ</h1>
            <nav>
                <Link href="/" replace>
                    <a>TOP</a>
                </Link>
                ・
                <Link href="/menu" replace>
                    <a>メニュー</a>
                </Link>
                ・
                <Link href="/order" replace>
                    <a>注文</a>
                </Link>
            </nav>
        </header>
    );
};

export default Header;

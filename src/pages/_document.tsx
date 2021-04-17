import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="ja">
                <Head>
                    <title>食神セタップ</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

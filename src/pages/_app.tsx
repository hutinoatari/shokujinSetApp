import { FC } from "react";
import { AppProps } from "next/app";
import "../styles/reset.scss";
import "../styles/App.scss";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <div id="app">
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
};

export default App;

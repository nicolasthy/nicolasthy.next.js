import * as React from "react";
import App from "next/app";
import Provider from "../components/Provider";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default MyApp;

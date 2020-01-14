import * as React from "react";
import App from "next/app";
import { PageTransition } from "next-page-transitions";

import Provider from "../components/Provider";

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, router } = this.props;
        return (
            <Provider>
                <PageTransition
                    timeout={800}
                    skipInitialTransition={true}
                    monkeyPatchScrolling={true}
                    classNames="page-transition"
                >
                    <Component {...pageProps} key={router.route} />
                </PageTransition>
            </Provider>
        );
    }
}

export default MyApp;

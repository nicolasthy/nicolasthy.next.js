import { useState } from "react";
import { jsx, css } from "@emotion/core";
import Head from "next/head";

import { siteMetadata } from "../config/site-config";

import Header from "./Header";

const Layout = props => {
    const [isDark, setIsDark] = useState(false);
    if (process.browser) {
        console.log(isDark);
    }

    return (
        <div>
            <Head>
                <title>{siteMetadata.title}</title>
                <meta name="description" content={siteMetadata.description} />
            </Head>
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;

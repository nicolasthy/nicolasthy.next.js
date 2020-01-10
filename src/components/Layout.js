import { useTheme } from "emotion-theming";
import styled from "@emotion/styled";
import Head from "next/head";

import { siteMetadata } from "../config/site-config";

import Header from "./Header";

const StyledLayout = styled.div`
    width: 100%;
    max-width: 950px;
    margin-left: auto;
    margin-right: auto;
`

const Layout = props => {
    const theme = useTheme();

    return (
        <StyledLayout>
            <Head>
                <title>{siteMetadata.title}</title>
                <meta name="description" content={siteMetadata.description} />
            </Head>
            <style jsx global>{`
                body {
                    background: ${theme.background};
                    color: ${theme.text};
                    transition: background 0.1s linear, color 0.1s linear;
                }
                a {
                    color: ${theme.link};
                    transition: color 0.1s linear;
                }
            `}</style>
            <Header setIsDark={props.setIsDark} isDark={props.isDark} />
            {props.children}
        </StyledLayout>
    );
};

export default Layout;

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
  font-family: "Lora", serif;
`;

const Layout = props => {
  const theme = useTheme();

  return (
    <StyledLayout>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <link
          href="https://fonts.googleapis.com/css?family=Lora|Poppins:400,600,700&display=swap"
          rel="stylesheet"
        ></link>
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
        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: "Poppins", sans-serif;
        }
      `}</style>
      <Header setIsDark={props.setIsDark} isDark={props.isDark} />
      {props.children}
    </StyledLayout>
  );
};

export default Layout;

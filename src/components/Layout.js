import { useTheme } from "emotion-theming"
import styled from "@emotion/styled"
import Head from "next/head"

import { siteMetadata } from "../config/site-config"

import { Header } from "./shared/Header/Header"

const StyledLayout = styled.div`
  width: 100%;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Lora", serif;
`

const Layout = (props) => {
  const theme = useTheme()

  return (
    <StyledLayout>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <link
          href="https://fonts.googleapis.com/css?family=Lora:ital,wght@0,400;0,700;1,400;1,700|Poppins:400,500,600,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <style jsx global>{`
        body {
          background: ${theme.background};
          color: ${theme.text};
          transition: background 0.2s linear, color 0.2s linear;
        }
        pre {
          transition: background 0.2s linear;
        }
        code {
          font-family: "Operator Mono", "Menlo", monospace;
        }
        code > span {
          padding: 5px 25px;
          display: block;
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
        .medium-zoom-overlay {
          z-index: 10;
          background: ${theme.backgroundTransition} !important;
        }
        .medium-zoom-image.medium-zoom-image--opened {
          z-index: 15;
        }
        .page-transition-enter:after {
          content: "";
          background: ${theme.backgroundTransition};
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          z-index: 10;
          transform: translateX(0);
          transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
        }
        .page-transition-enter-active:after {
          content: "";
          background: ${theme.backgroundTransition};
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          z-index: 10;
          transform: translateX(-100%);
          transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
        }
        .page-transition-exit:after {
          content: "";
          background: ${theme.backgroundTransition};
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          z-index: 10;
          transform: translateX(100%);
          transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
        }
        .page-transition-exit-active:after {
          content: "";
          background: ${theme.backgroundTransition};
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          z-index: 10;
          transform: translateX(0);
          transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
        }
      `}</style>
      <Header setIsDark={props.setIsDark} isDark={props.isDark} />
      {props.children}
    </StyledLayout>
  )
}

export default Layout

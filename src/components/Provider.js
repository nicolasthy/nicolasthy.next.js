import { useState, useEffect } from "react";
import { ThemeProvider } from "emotion-theming";

import Layout from "./Layout";

const themeLight = {
  text: "#191716",
  textLight: "#191716",
  background: "#F7F7FF",
  backgroundTransition: "#FAFAFF",
  link: "#424140",
  posts: {
    item: "#FAFAFF",
    itemHover: "#FFFFFF",
    itemShadow: "0 1px 2px 0 rgba(5, 7, 26, 0.1)",
    itemHoverShadow: "0 16px 12px -10px rgba(5, 7, 26, 0.1)",
    syntaxHighlightTheme: "githubGist",
    syntaxLineHighlightBackground: "#FAFAFF"
  }
};

const themeDark = {
  text: "#F7F7FF",
  textLight: "#B1B0B6",
  background: "#0E0C0C",
  backgroundTransition: "#191716",
  link: "rgba(255,255,255, 0.7)",
  posts: {
    item: "#161413",
    itemHover: "#1E1B1A",
    itemShadow: "0 1px 2px 0 rgba(5, 7, 26, 0.2)",
    itemHoverShadow: "0 16px 12px -10px rgba(5, 7, 26, 0.2)",
    syntaxHighlightTheme: "atomOneDark",
    syntaxLineHighlightBackground: "#191716"
  }
};

let prefersDarkMode;

if (process.browser) {
  const localPreference = JSON.parse(
    localStorage.getItem("nicolasthyPrefersDarkMode")
  );
  prefersDarkMode =
    typeof localPreference !== "undefined"
      ? localPreference
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const Provider = props => {
  const [isDark, setIsDark] = useState(prefersDarkMode);
  const [mounted, setMounted] = useState(false);

  if (process.browser) {
    useEffect(() => {
      setMounted(true);
      localStorage.setItem("nicolasthyPrefersDarkMode", isDark);
    }, [isDark]);
  }

  const renderBody = () => {
    const body = (
      <Layout setIsDark={setIsDark} isDark={isDark}>
        {props.children}
      </Layout>
    );
    if (!mounted) return <div style={{ visibility: "hidden" }}>{body}</div>;
    return body;
  };

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      {renderBody()}
    </ThemeProvider>
  );
};

export default Provider;

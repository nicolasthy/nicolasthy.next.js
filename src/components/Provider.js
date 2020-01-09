import { useState, useEffect } from "react";
import { ThemeProvider } from "emotion-theming";

import Layout from "./Layout";

const themeLight = {
    text: "#191716",
    background: "#F7F7FF",
    link: "#424140"
};

const themeDark = {
    text: "#F7F7FF",
    background: "#191716",
    link: "rgba(255,255,255, 0.7)"
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

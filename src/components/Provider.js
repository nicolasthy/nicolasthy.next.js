import { useState, useEffect } from "react"
import { ThemeProvider } from "emotion-theming"

import { LIGHT_THEME } from "../themes/lightTheme"
import { DARK_THEME } from "../themes/darkTheme"

import Layout from "./Layout"

let prefersDarkMode

if (process.browser) {
  const localPreference = JSON.parse(localStorage.getItem("nicolasthyPrefersDarkMode"))
  prefersDarkMode =
    typeof localPreference !== "undefined" ? localPreference : window.matchMedia("(prefers-color-scheme: dark)").matches
}

const Provider = (props) => {
  const [isDark, setIsDark] = useState(prefersDarkMode)
  const [mounted, setMounted] = useState(false)

  if (process.browser) {
    useEffect(() => {
      setMounted(true)
      localStorage.setItem("nicolasthyPrefersDarkMode", isDark)
    }, [isDark])
  }

  const renderBody = () => {
    const body = (
      <Layout setIsDark={setIsDark} isDark={isDark}>
        {props.children}
      </Layout>
    )
    if (!mounted) return <div style={{ visibility: "hidden" }}>{body}</div>
    return body
  }

  return <ThemeProvider theme={isDark ? DARK_THEME : LIGHT_THEME}>{renderBody()}</ThemeProvider>
}

export default Provider

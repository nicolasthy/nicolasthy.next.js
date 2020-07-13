import { COLORS } from "./constants"
import { hex2rgba } from "./utils"

export const DARK_THEME = {
  text: "#F7F7FF",
  textLight: "#B1B0B6",
  background: "#0E0C0C",
  backgroundTransition: "#CFF7B9",
  link: "rgba(255,255,255, 0.7)",
  logo: {
    background: COLORS.secondary,
    color: COLORS.dark,
  },
  menu: {
    activeBackground: hex2rgba(COLORS.secondary, 0.1),
    activeColor: COLORS.secondary,
  },
  posts: {
    item: "#161413",
    itemHover: "#1E1B1A",
    itemShadow: "0 1px 2px 0 rgba(5, 7, 26, 0.2)",
    itemHoverShadow: "0 16px 12px -10px rgba(5, 7, 26, 0.2)",
    itemTitleColor: COLORS.secondary,
    syntaxHighlightTheme: "atomOneDark",
    syntaxHighlightBackground: "#191716",
    imageShadowOpacity: 0.05,
  },
}

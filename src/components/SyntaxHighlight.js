import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useTheme } from "emotion-theming";

const SyntaxHighlight = props => {
    const theme = useTheme();
    const { value, language = null } = props;
    const lines = language.match(/{([^}]+)}/);
    const highlights =
        lines &&
        lines[1].split(",").map(highlight => Number.parseInt(highlight));
    const codeLanguage = lines
        ? language.replace(language.match(/{([^}]+)}/)[0], "")
        : language;

    return (
        <SyntaxHighlighter
            language={codeLanguage}
            style={themes[theme.posts.syntaxHighlightTheme]}
            customStyle={customStyles}
            wrapLines={true}
            lineProps={lineNumber => {
                let style = {};
                if (highlights && highlights.includes(lineNumber)) {
                    style.backgroundColor = "rgba(255, 49,91, 0.1)";
                    style.borderLeft = "3px solid #FF315B";
                }
                return { style };
            }}
        >
            {value}
        </SyntaxHighlighter>
    );
};

const customStyles = {
    fontSize: "16px",
    lineHeight: 1,
    fontFamily: "Menlo",
    padding: "15px 0",
    margin: "25px 80px",
    borderRadius: "4px",
    boxShadow: "0 16px 12px -10px rgba(5, 7, 26, 0.2)"
};

export default SyntaxHighlight;

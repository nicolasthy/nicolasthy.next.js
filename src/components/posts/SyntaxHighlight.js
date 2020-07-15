/** @jsx jsx */
import { useState } from "react"
import { css, jsx } from "@emotion/core"
import SyntaxHighlighter from "react-syntax-highlighter"
import * as themes from "react-syntax-highlighter/dist/cjs/styles/hljs"
import { useTheme } from "emotion-theming"
import { Check, Copy } from "react-feather"
import * as copy from "copy-to-clipboard"

const SyntaxHighlight = ({ value, language = null }) => {
  const theme = useTheme()
  const [copied, setCopied] = useState(false)

  const lines = language.match(/{([^}]+)}/)
  const highlights = lines && lines[1].split(",").map((highlight) => Number.parseInt(highlight))
  const codeLanguage = lines ? language.replace(language.match(/{([^}]+)}/)[0], "") : language

  const handleCopyToClipboard = () => {
    copy(value)
    if (!copied) setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  const renderCopyLink = () => {
    if (!copied)
      return (
        <span>
          <Copy /> Copy to clipboard
        </span>
      )

    return (
      <span css={copyLinkCheckedStyles}>
        <Check /> Copied!
      </span>
    )
  }

  return (
    <div css={containerStyles}>
      <div>
        <span css={copyLinkStyles} onClick={() => handleCopyToClipboard()}>
          {renderCopyLink()}
        </span>
        <span css={languageLabelStyles(codeLanguage)}>{codeLanguage}</span>
      </div>
      <SyntaxHighlighter
        language={codeLanguage.toLowerCase()}
        style={themes[theme.posts.syntaxHighlightTheme]}
        customStyle={customStyles}
        wrapLines={true}
        lineProps={(lineNumber) => {
          let style = {}
          if (highlights && highlights.includes(lineNumber)) {
            style.backgroundColor = languageHighlightColors[codeLanguage.toLowerCase()].background
            style.borderLeft = `3px solid ${languageHighlightColors[codeLanguage.toLowerCase()].border}`
          }
          return { style }
        }}
        css={css`
          background: ${theme.posts.syntaxHighlightBackground} !important;
          box-shadow: ${theme.posts.itemHoverShadow};
        `}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
}

const languageHighlightColors = {
  html: {
    background: "rgba(1, 55, 162, 0.1)",
    border: "rgba(1, 55, 162, 1)",
  },
  css: {
    background: "rgba(1, 55, 162, 0.1)",
    border: "rgba(1, 55, 162, 1)",
  },
  javascript: {
    background: "rgba(248, 179, 25, 0.1)",
    border: "rgba(248, 179, 25, 1)",
  },
  shell: {
    background: "rgba(248, 179, 25, 0.1)",
    border: "rgba(248, 179, 25, 1)",
  },
  ruby: {
    background: "rgba(255, 49, 91, 0.1)",
    border: "rgba(255, 49, 91, 1)",
  },
  haml: {
    background: "rgba(255, 49, 91, 0.1)",
    border: "rgba(255, 49, 91, 1)",
  },
  erb: {
    background: "rgba(255, 49, 91, 0.1)",
    border: "rgba(255, 49, 91, 1)",
  },
}

const containerStyles = css`
  position: relative;
`

const copyLinkStyles = css`
  position: absolute;
  top: 0;
  left: -10%;
  margin: 10px 0 0 25px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  opacity: 0.3;
  cursor: pointer;
  transition: opacity 0.2s linear;

  > span {
    display: flex;
    align-items: center;
  }

  svg {
    width: 16px;
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.6;
  }
`

const copyLinkCheckedStyles = css`
  animation: pop 0.4s ease-out;

  @keyframes pop {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }
`

const languageLabelStyles = (codeLanguage) => css`
  position: absolute;
  top: 0;
  right: -10%;
  margin: 10px 10px 0 0;
  padding: 3px 10px;
  border-radius: 50px;
  min-width: 45px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  opacity: 1;
  color: #fff;
  text-align: center;
  background: ${languageHighlightColors[codeLanguage.toLowerCase()].border};
`

const customStyles = {
  fontSize: "16px",
  lineHeight: 1,
  fontFamily: "Menlo",
  padding: "50px 0 15px",
  margin: "25px 0 25px -10%",
  borderRadius: "4px",
  width: "120%",
}

export default SyntaxHighlight

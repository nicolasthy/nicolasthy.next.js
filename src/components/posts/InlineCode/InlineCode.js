import React from "react"
import { useTheme } from "emotion-theming"
import * as copy from "copy-to-clipboard"

import { Code } from "./styles"

const InlineCode = ({ value }) => {
  const theme = useTheme()

  return <Code onClick={() => copy(value)} theme={theme}>{value}</Code>
}

export { InlineCode }

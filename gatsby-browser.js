import React from "react"

import { ThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
// prism theme
require("prismjs/themes/prism-tomorrow.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
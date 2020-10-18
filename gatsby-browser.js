import React from "react"
import { ThemeProvider } from './src/helpers/contexts/theme';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>{element}</ThemeProvider>
  )
}

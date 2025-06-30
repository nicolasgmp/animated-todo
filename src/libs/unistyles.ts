import { StyleSheet } from "react-native-unistyles"
import { breakpoints } from "./themes/breakpoints"
import { darkTheme, lightTheme } from "./themes/theme"

type AppThemes = {
  light: typeof lightTheme,
  dark: typeof darkTheme,
}
type AppBreakpoints = typeof breakpoints

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes { }
  export interface UnistylesBreakpoints extends AppBreakpoints { }
}

StyleSheet.configure({
  themes: {
    light: lightTheme,
    dark: darkTheme
  },
  breakpoints,
  settings: {
    initialTheme: 'dark'
  }
})



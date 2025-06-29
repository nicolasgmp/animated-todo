import { StyleSheet } from "react-native-unistyles"

const lightColors = {
  primary: {
    50: '#EEF2F6',
    100: '#CFD9E7',
    200: '#B1C1D8',
    300: '#92A9C9',
    400: '#7491B9',
    500: '#5578AA',
    600: '#446088',
    700: '#334866',
    800: '#223044',
    900: '#111822',
  }
}

const darkColors = {
  primary: {
    50: '#22252C',
    100: '#2B3140',
    200: '#33405A',
    300: '#3C5074',
    400: '#44608E',
    500: '#4E70A8',
    600: '#7098CF',
    700: '#90B8E0',
    800: '#B0D2EF',
    900: '#D6EBFA',
  }
}

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22
}

const base = {
  breakpoints,
  fontSize
}

const lightTheme = {
  ...base,
  colors: lightColors,
}

const darkTheme = {
  ...base,
  colors: darkColors,
}

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



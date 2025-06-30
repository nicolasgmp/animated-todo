import { breakpoints } from "./breakpoints"
import { lightColors, darkColors } from "./colors"
import { fontSize } from "./fontSize"

const base = {
  breakpoints,
  fontSize
}

export const lightTheme = {
  ...base,
  colors: lightColors,
} as const

export const darkTheme = {
  ...base,
  colors: darkColors,
} as const

type ThemeVariation = {
  primary: string,
  secondary: string,
  light: string,
  tertiary?: string,
  boxShadow?: string
}

type ThemeFonts = {
  heading: string,
  body: string
}

export interface ThemeProps {
  fonts: ThemeFonts,
  light: ThemeVariation,
  dark: ThemeVariation
}

const colours = {
  black: '#18013D',
  white: '#fefefe',
  purple: '#8f4efc',
  offPurple: '#6004F9'
}

const fonts = {
  heading: `"Metropolis", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  body: `"Inter", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif`
}

export const theme = {
  fonts: fonts,
  light: {
    primary: colours.purple,
    secondary: colours.black,
    tertiary: colours.offPurple,
    light: colours.white,
    boxShadow: '0px 0px 43px -10px black'
  },
  dark: {
    primary: colours.purple,
    secondary: colours.white,
    tertiary: colours.black,
    light: colours.white
  }
}

export default theme
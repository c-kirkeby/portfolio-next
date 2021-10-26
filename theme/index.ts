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
  purple: '#6308FB',
  offPurple: '#6004F9'
}

const fonts = {
  heading: 'Metropolis, system-ui, sans-serif',
  body: `Inter, system-ui, sans-serif`
}

export const lightTheme = {
  fonts: fonts,
  primary: colours.purple,
  background: colours.white,
  text: colours.black,
  secondary: colours.white,
  black: colours.black,
  boxShadow: '0px 0px 43px -10px black'
}

export const darkTheme = {
  fonts: fonts,
  primary: colours.white,
  background: colours.purple,
  text: colours.white,
  secondary: colours.purple,
  black: colours.black,
}

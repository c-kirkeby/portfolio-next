type ThemeVariation = {
  primary: string,
  secondary: string,
  light: string,
  tertiary?: string,
  boxShadow?: string
}

export interface ThemeProps {
  light: ThemeVariation,
  dark: ThemeVariation
}

const colours = {
  black: '#001626',
  white: '#fefefe',
  purple: '#8f4efc',
  offPurple: '#7344c1'
}

export const theme = {
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
import * as styledComponents from 'styled-components'
import { ThemeProps } from './'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeProps>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled

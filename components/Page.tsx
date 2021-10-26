import React, { ReactElement, useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from '../theme/styled-components'
import { lightTheme, darkTheme } from '../theme'
import fonts from '../theme/fonts'
import Meta from './Meta'
import Header from './Header'
import { ReactNode } from 'react'

const GlobalStyle = createGlobalStyle`
  ${fonts}
  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }
  @supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
  }
  body {
    /* Helvetica-based font stack: https://css-tricks.com/snippets/css/font-stacks/ */
    font-family: "Inter", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0;
    background-color: ${props => props.theme.secondary};
    margin: 0;
    font-size: 1rem;
    line-height: 2;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
  }
  #nprogress .spinner {
    display: none;
  }
  #nprogress .bar {
    background: ${props => props.theme.background};
  }
  #nprogress .peg {
    box-shadow: 0 0 10px ${props => props.theme.primary}, 0 0 5px ${props => props.theme.primary};
  }
  #nprogress .spinner-icon {
    border-top-color: ${props => props.theme.primary};
    border-left-color: ${props => props.theme.primary};
  }
  p, span, h1, h2, h3, h4, h5 {
    color: ${props => props.theme.text};
  }
  h1, h2, h3, h4, h5 {
    font-family: "Metropolis", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`

const Outer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0 auto;
  /* max-width: 900px; */
`

const Inner = styled.main`
  display: flex;
  flex: 1;
  padding: 0 .75rem;
`

const Footer = styled.footer`
  
`

const Page = (props: { children: ReactNode }): ReactElement => {
  const [theme, setTheme] = useState('light')
  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <React.Fragment>
          <GlobalStyle />
          <Outer>
            <Meta />
            <Header themeToggle={themeToggle} />
            <Inner>
              {props.children}
            </Inner>
            <Footer></Footer>
          </Outer>
        </React.Fragment>
      </ThemeProvider>
    </>
  )
}


export default Page

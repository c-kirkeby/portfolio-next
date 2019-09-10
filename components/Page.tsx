import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Meta from './Meta'
import Header from './Header'
import { ReactNode } from 'react'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  body {
    /* Helvetica-based font stack: https://css-tricks.com/snippets/css/font-stacks/ */
    font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0;
    background-color: #ffffff;
    @media (prefers-color-scheme: dark) {
      background-color: #001628;
    }
    margin: 0;
    font-size: 1.5rem;
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
    background: ${props => props.theme.primary};
  }
  #nprogress .peg {
    box-shadow: 0 0 10px ${props => props.theme.primary}, 0 0 5px ${props => props.theme.primary};
  }
  #nprogress .spinner-icon {
    border-top-color: ${props => props.theme.primary};
    border-left-color: ${props => props.theme.primary};
  }
  p, span, h1, h2, h3, h4, h5 {
    color: ${props => props.theme.light.secondary};
    @media (prefers-color-scheme: dark) {
      color: ${props => props.theme.dark.secondary};
    }
  }
`

const Outer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1160px;
`

const Inner = styled.main`
  display: flex;
  flex: 1;
  padding: 0 .75rem;
`

const Footer = styled.footer`
  
`

const colours = {
  black: '#001626',
  white: '#fefefe',
  purple: '#8f4efc',
  offPurple: '#7344c1'
}

const theme = {
  light: {
    primary: colours.purple,
    secondary: colours.black,
    tertiary: colours.offPurple,
  },
  dark: {
    primary: colours.purple,
    secondary: colours.white
  }
}

export default (props: { children: ReactNode }): JSX.Element =>
  <>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Outer>
          <Meta />
          <Header />
          <Inner>
            {props.children}
          </Inner>
          <Footer></Footer>
        </Outer>
      </React.Fragment>
    </ThemeProvider>
  </>
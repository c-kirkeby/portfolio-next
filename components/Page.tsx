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
   font-family: sans-serif;
   padding: 0;
   background-color: #ffffff;
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
`

const Page = styled.div`
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

const theme = {
  primary: '#8f4efc',
  secondary: '#2e2e2e',
  tertiary: '#7344c1'
}

export default (props: { children: ReactNode }): JSX.Element =>
  <div>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Page>
          <Meta />
          <Header />
          <Inner>
            {props.children}
          </Inner>
          <Footer></Footer>
        </Page>
      </React.Fragment>
    </ThemeProvider>
  </div>
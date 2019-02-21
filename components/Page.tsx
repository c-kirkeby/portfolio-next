import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Meta from './Meta'
import Header from './Header'

injectGlobal`
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

export default (props): JSX.Element =>
  <div>
    <Page>
      <Meta />
      {/* <Nav /> */}
      <Header />
      <Inner>
        {props.children}
      </Inner>
      <Footer></Footer>
    </Page>
  </div>
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Meta from './Meta'
import Nav from './Nav'

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
`

const Page = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
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
      <Nav />
      <Inner>
        {props.children}
      </Inner>
      <Footer></Footer>
    </Page>
  </div>
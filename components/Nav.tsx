import React from 'react'
import styled from 'styled-components'

import NavLink from './NavLink'

const Nav = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px .75rem;
  border-bottom: 1px solid #eee;
`

const NavBrand = styled.a`
  display: block;
`

const NavLinks = styled.nav`
  text-transform: uppercase;
  > a {
    font-size: 1.5rem;
    /* @media screen and (min-width: 1200px) {
      font-size: 3rem;
    } */
  }
`

export default () =>
  <Nav>
    <NavBrand href=''>
      Christian Kirkeby
    </NavBrand>
    <NavLinks>
      <NavLink href='/'>
        Home
      </NavLink>
      {' '}
      <NavLink prefetch href='/contact'>
        Contact
      </NavLink>
      {' '}
      <NavLink prefetch href='/portfolio'>
        Portfolio
      </NavLink>
    </NavLinks>
  </Nav>
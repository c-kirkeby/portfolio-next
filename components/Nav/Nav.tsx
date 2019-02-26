import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'

const Nav = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px .75rem;
  /* border-bottom: 1px solid #000; */
`

const NavLinks = styled.nav`
  text-transform: uppercase;
  > a {
    font-size: 1.5rem;
    margin-left: 30px;
    :hover {
      color: ${props => props.theme.tertiary};
    }
  }
  font-weight: 700;
  letter-spacing: 1.5px;
`

export default () =>
  <Nav>
    <NavLinks>
      <NavLink href='/'>
        Home
      </NavLink>
      {' '}
      <NavLink href='/blog' prefetch>
        Blog
      </NavLink>
      {' '}
      <NavLink href='/contact' prefetch>
        Contact
      </NavLink>
      {' '}
      <NavLink href='/portfolio' prefetch>
        Portfolio
      </NavLink>
    </NavLinks>
  </Nav>
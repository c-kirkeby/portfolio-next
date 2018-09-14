import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

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

const NavLink = styled(Link)`
  color: ${props => props.active ? '#777': '#000'};
`

export default () =>
  <Nav>
    <NavBrand href=''>
      Christian Kirkeby
    </NavBrand>
    <NavLinks>
      <NavLink active href='/'>
        <a>Home</a>
      </NavLink>
      {' '}
      <NavLink href='/contact'>
        <a>Contact</a>
      </NavLink>
      {' '}
      <NavLink href='/portfolio'>
        <a>Portfolio</a>
      </NavLink>
    </NavLinks>
  </Nav>
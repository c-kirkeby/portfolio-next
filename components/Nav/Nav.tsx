import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'

const NavLinks = styled.nav`
  text-transform: uppercase;
  display: flex;
  > a {
    font-size: 1.5rem;
    margin-left: 30px;
    :hover {
      color: ${props => props.theme.tertiary};
    }
  }
  @media only screen and (max-width: 768px) {
    display: ${props => props.isMenuOpen ? 'flex' : 'none'};
    flex-direction: column;
  }
  font-weight: 700;
  letter-spacing: 1.5px;
`

export default (props: { isMenuOpen: Boolean }) => {
  const { isMenuOpen } = props
  return (
    <NavLinks isMenuOpen={isMenuOpen}>
      <NavLink href='/'>
        Home
    </NavLink>
      <NavLink href='/blog' prefetch>
        Blog
    </NavLink>
      <NavLink href='/contact' prefetch>
        Contact
    </NavLink>
      <NavLink href='/portfolio' prefetch>
        Portfolio
    </NavLink>
    </NavLinks>
  )
}

import React from 'react'
import { NavLink, NavLinks } from './'
import { NavLinksProps } from './NavLinks'

const NavBar = (props: NavLinksProps) => {
  return (
    <NavLinks {...props}>
      <NavLink href='/'>
        Home
      </NavLink>
      <NavLink href='/posts' prefetch>
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

export default NavBar

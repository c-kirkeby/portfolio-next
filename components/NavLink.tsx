import Link from 'next/link'
import { SingletonRouter, withRouter } from 'next/router'
import styled from 'styled-components'
import { ReactNode } from 'react'

type ILinkProps = {
  active?: boolean
}

type NavLinkProps = {
  children?: ReactNode,
  router: SingletonRouter,
  href: string
}

const StyledNavLink = styled.a<ILinkProps>`
  color: ${props => props.active ? '#777' : '#000'};
`

const NavLink: React.SFC<NavLinkProps> = ({ children, router, href }) => 
  <Link href={href} passHref>
    <StyledNavLink active={router.pathname === href}>{children}</StyledNavLink>
  </Link>


export default withRouter(NavLink)
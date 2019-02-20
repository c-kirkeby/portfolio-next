import Link from 'next/link'
import Router, { SingletonRouter, withRouter } from 'next/router'
import styled from 'styled-components'
import { ReactNode } from 'react'

interface ILinkProps {
  active?: boolean
  onMouseEnter: () => void
}

interface NavLinkProps {
  children?: ReactNode
  router?: SingletonRouter
  href: string,
  prefetch?: boolean
}

const StyledNavLink = styled.a<ILinkProps>`
  color: ${props => props.active ? '#777' : '#000'};
`

const onMouseEnter = (prefetch = false, href: string) => {
  if (prefetch) {
    Router.prefetch(href)
  }
}

const NavLink: React.SFC<NavLinkProps> = ({ children, router, href, prefetch }, ...props) => {
  return (
    <Link href={href} passHref>
      <StyledNavLink
        onMouseEnter={()=> onMouseEnter(prefetch, href) }
        active={router.pathname === href}
        {...props}
      >
        {children}
      </StyledNavLink>
    </Link>
  )
}

export default withRouter(NavLink)

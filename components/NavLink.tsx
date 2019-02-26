import Link from 'next/link'
import Router, { SingletonRouter, withRouter } from 'next/router'
import styled from 'styled-components'

type LinkProps = {
  active?: boolean,
  onMouseEnter: () => void
}

type NavLinkProps = {
  children?: JSX.Element | string,
  prefetch?: boolean,
  router?: SingletonRouter,
  href: string
}

const StyledNavLink = styled.a<LinkProps>`
  color: ${props => props.active ? '#777' : '#000'};
`

const NavLink: React.SFC<NavLinkProps> = ({ children, router, href, prefetch }) =>
  <Link href={href} passHref>
    <StyledNavLink
      onMouseEnter={()=> { prefetch ? Router.prefetch(href) : null}}
      active={router.pathname === href}
    >
      {children}
    </StyledNavLink>
  </Link>


export default withRouter(NavLink)
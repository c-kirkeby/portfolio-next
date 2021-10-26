import Link from 'next/link'
import Router, { SingletonRouter, useRouter } from 'next/router'
import styled from '../../theme/styled-components'
import { ReactNode } from 'react'

export interface ILinkProps {
  active?: boolean
  onMouseEnter: () => void
}

export interface NavLinkProps {
  children?: ReactNode
  router?: SingletonRouter
  href: string,
  prefetch?: boolean
}

const StyledNavLink = styled.a<ILinkProps>`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.active ? props.theme.primary : props.theme.secondary};
`

const onMouseEnter = (prefetch = false, href: string) => {
  if (prefetch) {
    Router.prefetch(href)
  }
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, prefetch }, ...props) => {
  const router = useRouter()
  return (
    <Link href={href} passHref>
      <StyledNavLink
        onMouseEnter={() => onMouseEnter(prefetch, href)}
        active={router.pathname === href}
        {...props}
      >
        {children}
      </StyledNavLink>
    </Link>
  )
}

export default NavLink

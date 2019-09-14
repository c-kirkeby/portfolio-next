import { useState } from 'react'
import styled from 'styled-components'
import { Logo, BrandLink } from './Brand'
import { NavToggle, NavBar } from './Nav'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    align-items: stretch;
  }
  padding: 1.5rem 3rem;
`

// const BrandTitle = styled.span`
//   font-size: 3rem;
//   text-transform: uppercase;

// `

const NavAside = styled.div<HeaderMenuProps>`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    max-width: 135px;
  }
`

export interface HeaderProps {
  isMenuOpen: boolean,
  onClick: Function
}

export type HeaderMenuProps = Pick<HeaderProps, "isMenuOpen">

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <StyledHeader>
      <BrandLink href="/" aria-label="Link to homepage">
        <Logo alt="site logo" />
        {/* <BrandTitle>Christian Kirkeby</BrandTitle> */}
      </BrandLink>
      <NavAside isMenuOpen={isMenuOpen}>
        <NavToggle isMenuOpen={isMenuOpen} onClick={() => setMenuOpen(!isMenuOpen)} />
        <NavBar isMenuOpen={isMenuOpen} />
      </NavAside>
    </StyledHeader>
  )
}

export default Header

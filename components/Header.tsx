import { useState } from 'react'
import Nav from './Nav/Nav'
import styled from 'styled-components'
import { Logo, Brand } from './Brand'
import { NavToggle } from './Nav'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px 40px;
`

// const BrandTitle = styled.span`
//   font-size: 3rem;
//   text-transform: uppercase;

// `

const NavAside = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 135px;
`

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <StyledHeader>
      <Brand href='/'>
        <Logo />
        {/* <BrandTitle>Christian Kirkeby</BrandTitle> */}
      </Brand>
      <NavAside>
        <NavToggle onClick={() => setMenuOpen(!isMenuOpen)}>Open/Close</NavToggle>
        <Nav isMenuOpen={isMenuOpen} />
      </NavAside>
    </StyledHeader>
  )
}

export default Header

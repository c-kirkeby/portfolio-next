import styled from 'styled-components'
import { Logo, BrandLink } from './Brand'
import { NavBar } from './Nav'
import ColourToggle from './ColourToggle'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  padding: 0.75rem 1rem;
  margin: 0 auto;
`

const HeaderInner = styled.div`
  width: 900px;
  display: flex;
`

const HeaderSpacer = styled.div`
  margin: 0 auto;
`

const Header = ({ themeToggle, ...props }) => {
  return (
    <StyledHeader>
      <HeaderInner>
        <BrandLink passHref href="/">
          <Logo alt="site logo" />
          {/* <BrandTitle>Christian Kirkeby</BrandTitle> */}
        </BrandLink>
        <HeaderSpacer></HeaderSpacer>
        <NavBar />
        <ColourToggle />
      </HeaderInner>
    </StyledHeader>
  )
}

export default Header

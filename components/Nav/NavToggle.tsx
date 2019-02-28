import styled from 'styled-components'
// import Button from 'styled-system'

const NavToggleStyle = styled.button`
  display: none;
  border: none;
  border-radius: 4px;
  padding: 1rem;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
`

const Hamburger = styled.div`

`

const HamburgerPatty = styled.span`

`

const NavToggle = props =>
  <NavToggleStyle {...props}>
    <Hamburger>
      <HamburgerPatty></HamburgerPatty>
      <HamburgerPatty></HamburgerPatty>
      <HamburgerPatty></HamburgerPatty>
    </Hamburger>
  </NavToggleStyle>

export default NavToggle

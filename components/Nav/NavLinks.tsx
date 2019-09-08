import styled from '../../theme/styled-components'

export interface NavLinksProps {
  isMenuOpen: boolean
}

const NavLinks = styled.nav<NavLinksProps>`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  height: 100%;
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
    transition: height 5s;
  }
  font-weight: 700;
  letter-spacing: 1.5px;
`

export default NavLinks
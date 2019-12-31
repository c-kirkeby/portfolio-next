import styled from '../../theme/styled-components'

export interface NavLinksProps {
  isMenuOpen: boolean
}

const NavLinks = styled.nav<NavLinksProps>`
  /* text-transform: uppercase; */
  display: flex;
  align-items: flex-end;
  height: 100%;
  > a {
    font-size: 1.25rem;
    margin-left: 2rem;
    :hover {
      color: ${props => props.theme.light.tertiary};
      @media (prefers-color-scheme: dark) {
        ${props => props.theme.dark.tertiary};
      }
    }
  }
  @media only screen and (max-width: 768px) {
    display: ${props => props.isMenuOpen ? 'flex' : 'none'};
    flex-direction: column;
    transition: height 5s;
    > a {
      font-size: 1.5rem;
    }
  }
  font-weight: 700;
  letter-spacing: 0.125rem;
`

export default NavLinks
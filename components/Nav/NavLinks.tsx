import styled from '../../theme/styled-components'

const NavLinks = styled.nav`
  /* text-transform: uppercase; */
  display: flex;
  align-items: flex-end;
  height: 100%;
  > a {
    font-size: 1rem;
    margin-left: 1rem;
    :hover {
      color: ${props => props.theme.tertiary};
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    transition: height 5s;
    > a {
      font-size: 1.5rem;
    }
  }
  font-weight: 700;
  letter-spacing: -0.176px;
`

export default NavLinks
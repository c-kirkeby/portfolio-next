import styled from 'styled-components'

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  font-size: 1rem;
  a, button {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    background: none;
    border: 0;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
  }
`

export default NavStyles
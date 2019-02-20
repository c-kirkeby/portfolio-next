import Nav from './Nav/Nav'
import styled from 'styled-components'
import { Logo, Brand } from './Brand'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

export default () => {
  return (
    <StyledHeader>
      <Brand href='/'>
        <Logo />
      </Brand>
      <Nav />
    </StyledHeader>
  )
}

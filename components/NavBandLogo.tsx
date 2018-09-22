import styled from 'styled-components'

const StyledLogo = styled.img`
  display: inline-block;
  width: 4rem;
  height: 4rem;
`

export default (props) =>
  <StyledLogo src='/static/logo.svg' {...props} />
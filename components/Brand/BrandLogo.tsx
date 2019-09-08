import styled from 'styled-components'

const BrandLogo = styled.img`
  display: inline-block;
  height: 6rem;
  width: 6rem;
  padding: 0.5rem;
  position: relative;
`

export default (props) =>
  <BrandLogo src='/static/logo.svg' {...props} />
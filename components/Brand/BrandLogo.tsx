import styled from 'styled-components'

const BrandLogo = styled.img`
  display: inline-block;
  height: 5rem;
  width: 5rem;
  margin-left: 2rem;
  margin-top: 2rem;
  padding: 0.5rem;
  position: relative;
`

export default (props) =>
  <BrandLogo src='/static/logo.svg' {...props} />
import styled from 'styled-components'

/**
 * @todo refactor width property to react based on container prop
 */
export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const HeroTitle = styled.span`
  text-align: center;
  color: ${props => props.theme.light.secondary};
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.dark.secondary};
  }
`

export const HeroIntro = styled.p`
  
`
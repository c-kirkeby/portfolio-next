import styled from '../../theme/styled-components'
import React from 'react'

const BrandLogo = styled.svg`
  display: inline-block;
  height: 4.5rem;
  width: 4.5rem;
  padding: 0.5rem;
  cursor: pointer;
  }
  .logo--fg {
    fill: ${props => props.theme.light.light};
  }
  .logo--bg {
    fill: ${props => props.theme.light.primary};
  }
  @media (prefers-color-scheme: dark) {
    .logo--fg {
      fill: ${props => props.theme.dark.tertiary};
    }
    .logo--bg {
      fill: ${props => props.theme.dark.secondary}
    }
  }
  &:hover {
    .logo--bg {
      fill: ${props => props.theme.light.tertiary};
      @media (prefers-color-scheme: dark) {
        fill: ${props => props.theme.light.light};
      }
    }
  }
`

export default (props: any) => {
  return (
    <BrandLogo width={250} height={250} viewBox="0 0 256 256" fill="none" {...props}>
      <circle cx={125} cy={125} r={125} className="logo--bg" />
      <g className="logo--fg">
        <rect
          transform="skewX(-15)"
          width={55.5}
          height={100}
          x={100}
          y={75}
        />
        <rect
          transform="skewX(-15)"
          width={55.5}
          height={45}
          x={165.5}
          y={75}
        />
        <rect
          transform="skewX(-15)"
          width={55.5}
          height={45}
          x={165.5}
          y={130}
        />
      </g>
    </BrandLogo>
  )
}
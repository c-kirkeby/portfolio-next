import styled from '../../theme/styled-components'
import { darken } from 'polished'
import React from 'react'

const LogoStyle = styled.svg`
  cursor: pointer;
  .logo--fg {
    fill: ${props => props.theme.secondary};
  }
  .logo--bg {
    fill: ${props => props.theme.primary};
  }
  &:hover {
    .logo--bg {
      fill: ${props => darken(0.25, props.theme.secondary)});
    }
  }
`

interface IBrandLogoProps {

}

const LogoLink = styled.a`
  line-height: 0;
`

const BrandLogo = React.forwardRef<HTMLAnchorElement, IBrandLogoProps>((props, ref) => {
  return (
    <LogoLink {...props} ref={ref}>
      <LogoStyle width={35} height={35} viewBox="0 0 256 256">
        <circle cx={125} cy={125} r={125}
          className="logo--bg"
        />
        <g>
          <rect
            className="logo--fg"
            transform="skewX(-15)"
            width={55.5}
            height={100}
            x={100}
            y={75}
          />
          <rect
            className="logo--fg"
            transform="skewX(-15)"
            width={55.5}
            height={45}
            x={165.5}
            y={75}
          />
          <rect
            className="logo--fg"
            transform="skewX(-15)"
            width={55.5}
            height={45}
            x={165.5}
            y={130}
          />
        </g>
      </LogoStyle>
    </LogoLink>
  )
})

export default BrandLogo
import { useDarkMode } from '../hooks/useDarkMode'
import styled from 'styled-components'

const modes = [
  'default',
  'dark'
]

const renderIcon = (mode) => {
  switch (mode) {
    case 'dark':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4C10.9494 4 9.90914 4.20693 8.93853 4.60896C7.96793 5.011 7.08601 5.60028 6.34315 6.34315C5.60028 7.08601 5.011 7.96793 4.60896 8.93853C4.20693 9.90914 4 10.9494 4 12C4 13.0506 4.20693 14.0909 4.60896 15.0615C5.011 16.0321 5.60028 16.914 6.34315 17.6569C7.08601 18.3997 7.96793 18.989 8.93853 19.391C9.90914 19.7931 10.9494 20 12 20L12 12L12 4Z" fill="currentcolor" />
          <circle cx={12} cy={12} r={11} stroke="currentcolor" strokeWidth={2} />
        </svg>
      )
    default:
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          fill='currentcolor'>
          <circle
            r={11}
            cx={12}
            cy={12}
            fill='none'
            stroke='currentcolor'
            strokeWidth={2}
          />
          <circle
            r={7}
            cx={12}
            cy={12}
            fill='text'
            stroke='currentcolor'
            strokeWidth={2}
          />
        </svg>
      )
  }
}

const ColourToggleButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  &:hover: {
    color: ${props => props.theme.primary};
  }
`

const ColourToggle = props => {
  const [mode, setMode] = useDarkMode()
  return (
    <ColourToggleButton
      {...props}
      name="Colour Toggle"
      aria-hidden="true"
      onClick={async (_event) => {
        const index = modes.indexOf(mode)
        const next = modes[(index + 1) % modes.length]
        setMode(next)
      }}
      id="color-toggle"
      alt="Change colour mode"
    >
      {renderIcon(mode)}
    </ColourToggleButton>
  )
}
export default ColourToggle
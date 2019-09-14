import styled from 'styled-components'
import { HeaderProps, HeaderMenuProps } from '../Header'

const NavToggleStyle = styled.button`
  padding: 1.75rem 0rem 1.75rem 1.75rem;
  display: none;
  cursor: pointer;

  /**
   * Reset default button styles
   */ 
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  background-color: transparent;

  &:hover {
    opacity: 0.7;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
  }
`

const Hamburger = styled.div`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`

const HamburgerInner = styled.span<HeaderMenuProps>`
  display: block;
  top: 50%;
  margin-top: -2px;
  &,
  &::before,
  &::after {
    width: 40px;
    height: 4px;
    background-color: ${props => props.theme.light.secondary};
    @media (prefers-color-scheme: dark) {
      background-color: ${props => props.theme.dark.secondary};
    }
    border-radius: 4px;
    position: absolute;
    transition: transform 0.15s ease;
    &:hover, &:active {
      background-color: ${props => props.theme.light.primary};
      @media (prefers-colour-theme: dark) {
        background: ${props => props.theme.dark.primary};
      }
    }
  }
  &::before,
  &::after {
    content: "";
    display: block;
  }
  &::before {
    top: -10px;
  }
  &::after {
    bottom: -10px;
  }
  /**
   * Elastic
   */
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &::before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease;
  }
  &::after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  ${({ isMenuOpen }) => isMenuOpen && `
    transform: translate3d(0, 10px, 0) rotate(135deg);
    transition-delay: 0.075s;
    &::before {
      transition-delay: 0s;
      opacity: 0;
    }
    &::after {
      transform: translate3d(0, -20px, 0) rotate(-270deg);
      transition-delay: 0.075s;
    }
  `}
`

const NavToggle = ({ isMenuOpen, onClick, ...props }: HeaderProps) =>
  <NavToggleStyle onClick={() => onClick()} {...props}>
    <Hamburger>
      <HamburgerInner isMenuOpen={isMenuOpen}></HamburgerInner>
    </Hamburger>
  </NavToggleStyle>

export default NavToggle

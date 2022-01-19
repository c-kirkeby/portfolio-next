import styled from 'styled-components'

interface MainProps {
  children: React.ReactNode;
}

const MainStyle = styled.main`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`

const Main = ({ children }: MainProps) => {
  return <MainStyle>{children}</MainStyle>;
};

export default Main;

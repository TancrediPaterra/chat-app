import styled from 'styled-components';
import Background from './components/Background';
import Card from './components/Card';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <Wrapper>
      <Background />
      <Card/>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export default App;

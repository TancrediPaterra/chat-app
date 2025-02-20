import styled from 'styled-components';
import Background from './components/Background';
import Card from './components/Card';
import GlobalStyles from './components/GlobalStyles';
import { Message, MessagePrice } from './components/Message';
import MessagePhotos from './components/MessagePhotos';


function App() {
  console.log('App');
  return (
    <Wrapper>
      <Background />
      <Card name={"Samuel Green"} description={"Available to Walk"} avatarSrc={"/assets/avatar.jpg"}>
        <Message messageType="received">That sounds great. I’d be happy with that.</Message>
        <Message messageType="received">Could you send over some pictures of your dog, please?</Message>
        <MessagePhotos messageType="sent">
          <Image src="/assets/dog-image-1.jpg" alt="dog_1"/>
          <Image src="/assets/dog-image-2.jpg" alt="dog_2"/>
          <Image src="/assets/dog-image-3.jpg" alt="dog_3"/>
        </MessagePhotos>
        <Message messageType="sent">Here are a few pictures. She’s a happy girl!</Message>
        <Message messageType={"sent"}>Can you make it?</Message>
        <Message messageType={"received"}>She looks so happy! The time we discussed works. How long shall I take her out for?</Message>
        <MessagePrice price='30'>30 min walk</MessagePrice>
        <MessagePrice price='49'>1 hour walk</MessagePrice>
      </Card>
      <GlobalStyles />
    </Wrapper>
  );
}

const Price = styled.span`
  font-weight: 700;
  font-size: calc(12 / 16 * 1rem);
  color: white;
  margin-left: auto;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10%;
`;

export default App;

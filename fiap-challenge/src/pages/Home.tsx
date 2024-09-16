import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';
import Chat from '../components/Chat/Chat';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleText = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  line-height: 1.2;
  text-align: center;
`;

const ChatTitle = () => (
  <TitleContainer>
    <TitleText>PORTOCHAT</TitleText>
  </TitleContainer>
);

const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: calc(100vh - 160px);
  margin-top: 10px;
  gap: 2vh;

  @media (max-width: 1280px) {
    gap: 120px;
    padding: 0px;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 0px;
    margin-top: 5px;
    overflow: hidden;
  }
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Home = () => (
  <>
    <Header />
    <MainContainer>
      <Slider />
      <ChatContainer>
        <ChatTitle />
        <Chat />
      </ChatContainer>
    </MainContainer>
    <Footer />
  </>
);

export default Home;

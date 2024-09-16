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
  font-size: 2rem; 
  color: #f2f2f2; 
  font-family: 'Arial', sans-serif; 
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); 
  margin: 0;
`;

const ChatTitle = () => (
  <TitleContainer>
    <TitleText>PortoChat</TitleText>
  </TitleContainer>
);

const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: calc(100vh - 160px);
  margin-top: 10px; /* Reduzi o margin-top */
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
    margin-top: 5px; /* Ainda mais reduzido em telas menores */
    overflow: hidden;
  }
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo do chat */
  width: 100%; /* Ajusta a largura conforme necessário */
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

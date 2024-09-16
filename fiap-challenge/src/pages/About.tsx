import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(34, 34, 34, 0.9));
  color: #fff;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #f1f1f1;
  margin: 20px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtext = styled.p`
  font-size: 1.25rem;
  color: #b0b0b0;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px auto;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);

  video {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const About: React.FC = () => {
  return (
    <>
      <Header />
      <AboutContainer>
        <Title>Entenda o Porto Para Todos</Title>
        <Subtext>
          Descubra como o Porto Para Todos está transformando a forma como interagimos com os clientes e prestadores de serviço. Assista ao vídeo para entender melhor nosso impacto e objetivos.
        </Subtext>
        <VideoContainer>
          <video controls>
            <source src="video.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </VideoContainer>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;

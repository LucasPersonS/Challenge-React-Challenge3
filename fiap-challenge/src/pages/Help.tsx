import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ContainerAjuda = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #000000cc, #323333e6);
  color: #fff;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #f1f1f1;
  margin: 20px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TextoAjuda = styled.div`
  font-size: 1.25rem;
  color: #b0b0b0;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;

  p {
    margin-bottom: 20px;
  }
`;

const ContainerSanfona = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
`;

const ItemSanfona = styled.div`
  border: 1px solid #003366;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
  background: linear-gradient(135deg, #003366, #001f3f);
`;

const CabecalhoSanfona = styled.div<{ isOpen: boolean }>`
  background: #003366;
  color: #fff;
  padding: 15px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s;

  &:hover {
    background: #002244;
  }

  ${({ isOpen }) => isOpen && `
    background: #002244;
  `}
`;

const Indicador = styled.span<{ isOpen: boolean }>`
  font-size: 1.5rem;
  transition: transform 0.3s;

  ${({ isOpen }) => isOpen && `
    transform: rotate(45deg);
  `}
`;

const ConteudoSanfona = styled.div<{ isOpen: boolean }>`
  background: #ffffff;
  color: #333333;
  padding: 15px;
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;

const FAQ: React.FC = () => {
  const [indiceAberto, setIndiceAberto] = useState<number | null>(null);

  const alternarItem = (indice: number) => {
    setIndiceAberto(indiceAberto === indice ? null : indice);
  };

  return (
    <ContainerSanfona>
      <ItemSanfona>
        <CabecalhoSanfona
          isOpen={indiceAberto === 0}
          onClick={() => alternarItem(0)}
        >
          O que é o Porto Para Todos?
          <Indicador isOpen={indiceAberto === 0}>+</Indicador>
        </CabecalhoSanfona>
        <ConteudoSanfona isOpen={indiceAberto === 0}>
          <p>O Porto Para Todos é uma plataforma destinada a conectar pessoas e fornecer recursos e suporte para diversas necessidades.</p>
        </ConteudoSanfona>
      </ItemSanfona>
      <ItemSanfona>
        <CabecalhoSanfona
          isOpen={indiceAberto === 1}
          onClick={() => alternarItem(1)}
        >
          Como posso entrar em contato com o suporte?
          <Indicador isOpen={indiceAberto === 1}>+</Indicador>
        </CabecalhoSanfona>
        <ConteudoSanfona isOpen={indiceAberto === 1}>
          <p>Você pode entrar em contato com o suporte através do botão de WhatsApp no canto do direito abaixo do website.</p>
        </ConteudoSanfona>
      </ItemSanfona>
      <ItemSanfona>
        <CabecalhoSanfona
          isOpen={indiceAberto === 2}
          onClick={() => alternarItem(2)}
        >
          Como posso me tornar um parceiro?
          <Indicador isOpen={indiceAberto === 2}>+</Indicador>
        </CabecalhoSanfona>
        <ConteudoSanfona isOpen={indiceAberto === 2}>
          <p>Clique em "Parceiros" e faça seu cadastro instantâneamente!</p>
        </ConteudoSanfona>
      </ItemSanfona>
    </ContainerSanfona>
  );
};

const Help: React.FC = () => {
  return (
    <>
      <Header />
      <ContainerAjuda>
        <Titulo>Como Podemos Ajudar?</Titulo>
        <TextoAjuda>
          <p><strong>Bem-vindo à seção de ajuda!</strong></p>
          <p>Aqui você encontrará respostas para perguntas frequentes e orientações úteis sobre como usar nosso site e resolver problemas comuns.</p>
          <p>Se você tiver dúvidas adicionais, confira nosso FAQ abaixo:</p>
        </TextoAjuda>
        <FAQ />
      </ContainerAjuda>
      <Footer />
    </>
  );
};

export default Help;

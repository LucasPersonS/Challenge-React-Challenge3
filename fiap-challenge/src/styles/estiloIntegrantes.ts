import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

export const ContainerIntegrantes = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #001f3f, #003366); 
  color: #fff;
`;

export const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #f1f1f1;
  margin: 20px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const GridIntegrantes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const CartaoIntegrante = styled.div`
  background: #ffffff;
  color: #333333;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Nome = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

export const Info = styled.p`
  font-size: 1rem;
  margin: 5px 0;
`;

export const RedesSociais = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`;

export const IconeLinkedin = styled(FaLinkedin)`
  color: #0077b5; 
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #005582; 
  }
`;

export const IconeGithub = styled(FaGithub)`
  color: #333; /* Cor padrão do GitHub */
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #000; 
  }
`;

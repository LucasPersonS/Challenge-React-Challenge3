import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {
  ContainerIntegrantes,
  Titulo,
  GridIntegrantes,
  CartaoIntegrante,
  Nome,
  Info,
  RedesSociais,
  IconeLinkedin,
  IconeGithub
} from '../styles/estiloIntegrantes';

const Integrantes: React.FC = () => {
  const participantes = [
    { nome: 'Lucas Person Servollo', rm: '559186', turma: '1TDSPY', linkedin: 'https://www.linkedin.com/in/lservollo', github: 'https://github.com/LucasPersonS' },
    { nome: 'João Pedro Sanson', rm: '559186', turma: '1TDSPY', linkedin: 'https://www.linkedin.com/in/joaopedrosanson', github: 'https://github.com/joaopedrosanson' },
    { nome: 'Vinicius Ribeiro Nery', rm: '559186', turma: '1TDSPY', linkedin: 'https://www.linkedin.com/in/vinicius-ribeiro-0879b2252/', github: 'https://github.com/viniciusnery' },
  ];

  return (
    <>
      <Header />
      <ContainerIntegrantes>
        <Titulo>Conheça os Integrantes</Titulo>
        <GridIntegrantes>
          {participantes.map((integrante, index) => (
            <CartaoIntegrante key={index}>
              <Nome>{integrante.nome}</Nome>
              <Info>RM: {integrante.rm}</Info>
              <Info>Turma: {integrante.turma}</Info>
              <RedesSociais>
                <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer">
                  <IconeLinkedin />
                </a>
                <a href={integrante.github} target="_blank" rel="noopener noreferrer">
                  <IconeGithub />
                </a>
              </RedesSociais>
            </CartaoIntegrante>
          ))}
        </GridIntegrantes>
      </ContainerIntegrantes>
      <Footer />
    </>
  );
};

export default Integrantes;

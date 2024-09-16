import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  width: 100%;
  padding: 10px 20px; /* Reduzi o padding */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Permite que o conteúdo quebre a linha em telas menores */

  @media (max-width: 768px) {
    flex-direction: column; /* Alinhar os itens em coluna */
    padding: 10px; /* Reduz ainda mais o padding em telas pequenas */
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 5px; /* Reduz ainda mais para telas muito pequenas */
  }
`;

export const FooterLogo = styled.img`
  height: 50px;
  max-width: 300px;
  margin-right: -120px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px; /* Adiciona espaçamento em telas menores */
  }
`;

export const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10px; /* Espaçamento entre os links e outros elementos */
  }

  a {
    text-decoration: none;
    color: #f2f2f2;
    font-weight: bold;
  }

  a:hover {
    color: #ffcc00;
  }
`;

export const CompanyInfo = styled.div`
  text-align: center;

  p {
    margin: 5px 0;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;

    a {
      color: #f2f2f2;
      font-size: 20px;
    }

    a:hover {
      color: #ffcc00;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

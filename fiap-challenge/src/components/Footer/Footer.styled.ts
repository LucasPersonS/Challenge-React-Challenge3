import styled from 'styled-components';
export const FooterContainer = styled.footer`
  background-color: #000;
  color: #e0e0e0;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: inline;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #333;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
  }
`;

export const FooterLogo = styled.img`
  height: 60px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    height: 50px;
    margin-bottom: 15px;
  }
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin-left:450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #e0e0e0;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    transition: color 0.3s;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #ffcc00;
      transition: width 0.3s;
      position: absolute;
      bottom: -5px;
      left: 0;
    }

    &:hover {
      color: #ffcc00;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const CompanyInfo = styled.div`
  text-align: center;
  margin: 20px 0;
  margin-right:-250px;

  p {
    margin: 5px 0;
    font-size: 0.875rem;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;

    a {
      color: #e0e0e0;
      font-size: 24px;
      transition: color 0.3s;
      
      &:hover {
        color: #ffcc00;
      }
    }
  }
`;

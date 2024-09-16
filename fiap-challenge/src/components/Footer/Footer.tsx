import { FooterContainer, FooterLogo, FooterLinks, CompanyInfo } from './Footer.styled';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => (
  <FooterContainer>
    <FooterLogo src="/logo-porto.png" alt="Logo" />
    <CompanyInfo>
      <p>Contato: (11) 1234-5678</p>
      <p>Endereço: Rua Exemplo, 123, São Paulo, SP</p>
      <p>CNPJ: 12.345.678/0001-99</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </CompanyInfo>
    <FooterLinks>
      <li><a href="/">Home</a></li>
      <li><a href="/help">Ajuda</a></li>
      <li><a href="/login">Login</a></li>
    </FooterLinks>
  </FooterContainer>
);

export default Footer;

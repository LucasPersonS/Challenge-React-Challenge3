import { useState } from 'react';
import { HeaderContainer, Logo, NavList, MenuButton, MenuIcon } from './Header.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faQuestionCircle, faUsers, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <a href="/"><Logo src='/porto-para-todos.png' alt="Logo" /></a>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon />
      </MenuButton>
      <NavList isOpen={isMenuOpen}>
        <li><a href="/about"><FontAwesomeIcon icon={faInfoCircle} /> Sobre</a></li>
        <li><a href="/help"><FontAwesomeIcon icon={faQuestionCircle} /> Ajuda</a></li>
        <li><a href="/integrantes"><FontAwesomeIcon icon={faUsers} /> Integrantes</a></li>
        <li><a href="/login"><FontAwesomeIcon icon={faSignInAlt} /> Login</a></li>
      </NavList>
    </HeaderContainer>
  );
};

export default Header;

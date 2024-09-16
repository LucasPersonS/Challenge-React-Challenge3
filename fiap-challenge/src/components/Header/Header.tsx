import { useState } from 'react';
import { HeaderContainer, Logo, NavList, MenuButton, MenuIcon } from './Header.styled';

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
        <li><a href="/about">Sobre</a></li>
        <li><a href="/help">Ajuda</a></li>
        <li><a href="/login">Parceiros</a></li>
        <li><a href="/integrantes">Integrantes</a></li>
      </NavList>
    </HeaderContainer>
  );
};

export default Header;

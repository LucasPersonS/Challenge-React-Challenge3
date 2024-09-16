import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  padding: 15px 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`;

export const Logo = styled.img`
  max-height: 60px;

  @media (max-width: 480px) {
    max-height: 50px;
  }
`;

export const NavList = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    background-color: #ffffff;
    position: absolute;
    top: 60px;
    left: 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    max-height: ${props => (props.isOpen ? '300px' : '0')};
    align-items: center;
  }

  @media (min-width: 769px) {
    display: flex;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
    padding: 12px 20px;
    border-radius: 6px;
    background: linear-gradient(180deg, #173EEE, #112583);
    position: relative;
    overflow: hidden;
    transition: background 0.3s ease, color 0.3s ease;

    @media (max-width: 768px) {
      padding: 10px 15px;
    }

    &:hover {
      background: linear-gradient(135deg, #ffffff, #e0e0e0);
      color: #333333;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      transition: opacity 0.3s ease;
      z-index: 0;
      border-radius: 6px;
    }

    &:hover::before {
      opacity: 0;
    }

    span {
      position: relative;
      z-index: 1;
    }

    svg {
      margin-right: 8px;
      vertical-align: middle;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  border-radius: 6px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 2px;
  background: #333;
  position: relative;
  transition: background 0.3s;

  &::before,
  &::after {
    content: '';
    width: 30px;
    height: 2px;
    background: #333;
    position: absolute;
    left: 0;
    transition: transform 0.3s;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }
`;

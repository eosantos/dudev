import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/svg/Dudev_003.svg';

const Nav = styled.nav<{ $isOpen: boolean }>`
  font-family: 'Raleway', sans-serif;
  width: 100%;
  padding: 4% 10% 4% 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;

  // Quando o menu estiver aberto
  ${({ $isOpen }) =>
    $isOpen &&
    `
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  `}
`;

const Menu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  margin-left: auto;
  position: relative;

  a {
    margin: 0 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
    transition: color 0.3s ease;
    margin-bottom: 10px;

    position: relative;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 4px; // Altura da tarja
      background-color: ${({ theme }) => theme.colors.primary}; // Cor da tarja
      position: absolute;
      bottom: -8px; // Espaçamento entre o texto e a tarja
      left: 0;
      opacity: 0; // Inicialmente invisível
      transition: opacity 0.3s ease; // Transição suave
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};

      &::after {
        opacity: 1;
      }
    }
  }

  // Ocultar o menu no mobile inicialmente
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    align-items: center;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const HamburgerMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;

    div {
      width: 25px;
      height: 3px;

      background: ${({ theme }) => theme.colors.text};
      margin: 4px;
      transition: all 0.3s ease;
      transform-origin: 1px;

      &:nth-child(1) {
        transform: ${({ $isOpen }) =>
          $isOpen ? 'rotate(45deg)' : 'rotate(0)'};
      }

      &:nth-child(2) {
        opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
        transform: ${({ $isOpen }) =>
          $isOpen ? 'translateX(20px)' : 'translateX(0)'};
      }

      &:nth-child(3) {
        transform: ${({ $isOpen }) =>
          $isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsOpen(prev => !prev); // Alterna o estado do menu
  };

  return (
    <Nav $isOpen={isOpen}>
      <Logo
        style={{
          width: '150px',
          height: 'auto',
          margin: isOpen ? '0 auto' : '0',
        }}
        alt="Logo Eduardo"
      />
      <HamburgerMenu $isOpen={isOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
      <Menu $isOpen={isOpen}>
        <a href="#about">Sobre Mim</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </Menu>
    </Nav>
  );
};

export default Header;

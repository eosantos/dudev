import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Menu = styled.div`
  a {
    margin-left: 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.text};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;


const Header = () => {
  return (
    <Nav>
      <Logo>Eduardo</Logo>
      <Menu>
        <a href="#about">Sobre Mim</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </Menu>
    </Nav>
  );
};

export default Header;

'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; // Importando o componente Image do Next.js
import ImagePerfil from '../assets/img/perfilAbout.png';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaSass } from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiAxios,
  SiJest,
  SiCypress,
} from 'react-icons/si'; // Importação correta

const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: row;
  margin: 40px 0;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextSection = styled.div`
  width: 60%;
  padding: 20px;
  margin: 20px;
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: 1024px) {
    width: 100%;
    margin: 20px 0;
    padding: 0px 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
    padding: 0px 20px;
  }
`;

const TextGreeting = styled.p`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 4rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 5.5rem;
  }
`;

const TextName = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 4rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 4rem;
  }
`;

const TextParagraph = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-top: 0;
  text-align: justify;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0;
  }
`;

const ImageSection = styled.div`
  width: 40%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 0;
    display: block;
    height: 100%;
    width: auto;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 800px;
  }

  img {
    border-radius: 0;
    display: block;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
  }
`;

const SeparatorLine = styled.hr`
  margin: 30px 50px 30px 0;
  border: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const SkillsTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px; 

  @media (max-width: 768px) {
    justify-content: center; menores
  }
`;

const SkillIcon = styled.div`
  font-size: 50px;
  color: #282828; /* Cor padrão */
  transition:
    transform 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;

  /* Efeito no ícone diretamente */
  & > svg {
    transition:
      transform 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease;
  }

  &:hover > svg {
    color: #ff4713; /* Cor ao passar o mouse */
    transform: scale(1.2); /* Aumenta o tamanho para 120% */
  }
`;

const AboutSection = styled.section`
  scroll-margin-top: 120px; /* Altura do header */
  /* Outras propriedades da seção 'about' */
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <TextSection>
          <TextGreeting>Olá,</TextGreeting>
          <TextName>
            meu nome é <span>Eduardo Oliveira</span>
          </TextName>
          <TextParagraph>
            Sou desenvolvedor <span>front-end</span> com uma sólida experiência
            em <span>JavaScript</span>, <span>ReactJS</span> e{' '}
            <span>TypeScript</span>, e atualmente estou focado em projetos com
            Next.js. Tenho uma forte paixão por criar interfaces de usuário
            responsivas e intuitivas, sempre buscando a melhor experiência
            possível para o usuário. Utilizo ferramentas como{' '}
            <span>Styled-Components</span> e <span>SASS</span> para desenvolver
            layouts modernos e funcionais.
          </TextParagraph>
          <TextParagraph>
            Minha experiência inclui o uso de bibliotecas e frameworks como{' '}
            <span>Redux</span> para gerenciamento de estado e <span>Axios</span>{' '}
            para integração com <span>APIs</span>. Também tenho habilidades em{' '}
            <span>NodeJS</span>, <span>Bootstrap</span>, <span>MUI</span>,{' '}
            <span>Jest</span>, <span>Cypress</span>, <span>SQL</span> e{' '}
            <span>Docker</span>, o que me permite desenvolver aplicações
            robustas e escaláveis. Além disso, utilizo <span>Figma</span> para
            criar wireframes e protótipos, garantindo um design eficaz.
          </TextParagraph>
          <TextParagraph>
            Já possuo conhecimentos em Arquitetura de Software e metodologias
            ágeis, como Scrum e Kanban, e atualmente estou estudando Arquitetura
            de Software e Node.js com o objetivo de me tornar um desenvolvedor{' '}
            <span>full-stack</span> no futuro.
          </TextParagraph>
          <TextParagraph>
            Estou aberto a oportunidades de colaboração e desafios empolgantes
            na indústria de tecnologia. Sinta-se à vontade para entrar em
            contato e conhecer mais sobre o meu trabalho!
          </TextParagraph>

          <TextName>
            <span>Espero que goste do meu portfólio!</span>
          </TextName>
          <SeparatorLine />
          <SkillsTitle>SKILLS</SkillsTitle>
          <SkillsContainer>
            <SkillIcon>
              <FaReact />
            </SkillIcon>
            <SkillIcon>
              <SiTypescript />
            </SkillIcon>
            <SkillIcon>
              <FaNodeJs />
            </SkillIcon>
            <SkillIcon>
              <SiRedux />
            </SkillIcon>
            <SkillIcon>
              <SiAxios />
            </SkillIcon>
            <SkillIcon>
              <FaGitAlt />
            </SkillIcon>
            <SkillIcon>
              <SiJest />
            </SkillIcon>
            <SkillIcon>
              <SiCypress />
            </SkillIcon>
            <SkillIcon>
              <FaDocker />
            </SkillIcon>
            <SkillIcon>
              <FaSass />
            </SkillIcon>
          </SkillsContainer>
        </TextSection>
        <ImageSection>
          <Image src={ImagePerfil} alt="Imagem de perfil" />
        </ImageSection>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;

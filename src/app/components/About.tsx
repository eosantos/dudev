'use client';

import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: #555;
    line-height: 1.6;
  }
`;

const About: React.FC = () => {
  return (
    <Section>
      <h2>Sobre Mim</h2>
      <p>
        Olá, sou Eduardo, desenvolvedor front-end com mais de 5 anos de
        experiência. Adoro criar interfaces limpas e funcionais, focando em
        usabilidade e performance.
      </p>
    </Section>
  );
};

export default About;

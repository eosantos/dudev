// components/Hero.tsx
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Hero = () => {
  return (
    <Section>
      <motion.h1
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        Front-End Engineer & Designer
      </motion.h1>
      <p>Criando soluções criativas e eficientes com React e TypeScript.</p>
    </Section>
  );
};

export default Hero;

'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Separator = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftBubblesContainer = styled.div`
  position: absolute;
  left: 50px;
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const Bubble = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`;

const Line = styled.div`
  position: absolute;
  right: 50px;
  top: 50%;
  width: 300px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  transform: translateY(-50%);

  @media (max-width: 768px) {
    right: 20px;
    width: 100px;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 35px;
  cursor: pointer;
`;

// Estilos para a seta
const Arrow = styled(motion.div)`
  width: 30px;
  height: 30px;
  border: solid ${({ theme }) => theme.colors.primary};
  border-width: 0px 6px 6px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  border-radius: 5px;
  pointer-events: auto;
`;

// Componente ParallaxSeparator
const ParallaxSeparator: React.FC = () => {
  const scrollDown = () => {
    window.scrollBy({ top: 300, behavior: 'smooth' }); // Rola 300px para baixo
  };

  return (
    <Separator>
      <LeftBubblesContainer>
        <Bubble />
        <Bubble />
        <Bubble />
      </LeftBubblesContainer>
      <Line />
      <ScrollIndicator
        onClick={scrollDown}
        animate={{
          y: [0, -20, 0], // Animação de pulso (subindo e descendo)
        }}
        transition={{
          duration: 1.0, // Duração da animação de pulso
          repeat: Infinity, // Repetir indefinidamente
          ease: 'easeInOut', // Efeito de aceleração
        }}
      >
        <Arrow
          initial={{ opacity: 0.5 }} // Opacidade inicial mais baixa
          whileHover={{ opacity: 1, pointerEvents: 'auto' }} // Opacidade ao passar o mouse e permitir eventos de ponteiro
          animate={{
            opacity: [0.5, 1, 0.5], // Inverter a animação de opacidade
            pointerEvents: 'none', // Desativar eventos de ponteiro durante a animação
          }}
          transition={{
            duration: 1.0, // Duração da animação de opacidade
            repeat: Infinity, // Repetir indefinidamente
            ease: 'easeInOut', // Efeito de aceleração
            times: [0, 0.5, 1, 1.5], // Os tempos em que cada parte da animação acontece
            delay: 1, // Delay após a seta descer
          }}
        />
      </ScrollIndicator>
    </Separator>
  );
};

export default ParallaxSeparator;

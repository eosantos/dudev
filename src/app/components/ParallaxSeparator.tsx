'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Separator = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.background},
    #ffffff
  );
  height: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilos para o indicador de rolagem
const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 35px; /* Ajuste conforme necessário */
  cursor: pointer;
`;

// Estilos para a seta
const Arrow = styled(motion.div)`
  width: 30px; /* Largura da seta */
  height: 30px; /* Altura da seta */
  border: solid ${({ theme }) => theme.colors.primary}; /* Cor da seta */
  border-width: 0px 6px 6px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  border-radius: 5px;
`;

// Componente ParallaxSeparator
const ParallaxSeparator: React.FC = () => {
  const scrollDown = () => {
    window.scrollBy({ top: 300, behavior: 'smooth' }); // Rola 100px para baixo
  };

  return (
    <Separator>
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
          whileHover={{ opacity: 1 }} // Opacidade ao passar o mouse
          animate={{
            opacity: [0.5, 1, 0.5], // Inverter a animação de opacidade
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

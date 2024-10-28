'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  padding: 0 2rem;

  .home-name-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    width: 100%;
    max-width: 800px;

    @media (max-width: 768px) {
      max-width: 100%;
      padding: 0 1rem;
    }

    @media (max-width: 480px) {
      gap: 0.5rem;
    }
  }

  .home-name-1 {
    font-family: 'Raleway', sans-serif;
    font-size: 10rem;
    font-weight: 800;
    letter-spacing: 1.5rem;
    margin-bottom: -16%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 1200px) {
      font-size: 8rem;
      letter-spacing: 1rem;
      margin-bottom: -13%;
    }

    @media (max-width: 775px) {
      font-size: 5rem;
      letter-spacing: 0.5rem;
      margin-bottom: -12%;
    }

    @media (max-width: 540px) {
      font-size: 3.5rem;
      letter-spacing: 0.3rem;
      margin-bottom: -10%;
    }

    @media (max-width: 375px) {
      font-size: 3rem;
      letter-spacing: 0.2rem;
      margin-bottom: -8%;
    }
  }

  .home-name-2 {
    font-family: 'Raleway', sans-serif;
    font-size: 8rem;
    font-weight: 300;
    height: min-content;
    letter-spacing: 3.7rem;
    margin: 0;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    padding-left: 25px;

    @media (max-width: 1200px) {
      font-size: 6rem;
      letter-spacing: 3rem;
      padding-left: 20px;
    }

    @media (max-width: 775px) {
      font-size: 4rem;
      letter-spacing: 1.8rem;
    }

    @media (max-width: 540px) {
      font-size: 3rem;
      letter-spacing: 1rem;
      padding-left: 10px;
    }

    @media (max-width: 375px) {
      font-size: 2.5rem;
      letter-spacing: 0.8rem;
      padding-left: 5px;
    }
  }

  .home-subtitle {
    font-family: 'Raleway', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;

    p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.text};
      margin: 0 0.5rem;

      @media (max-width: 768px) {
        font-size: 0.8rem;
      }

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }

    span {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
      font-size: 1.5rem;
      margin: 0 0.5rem;

      @media (max-width: 768px) {
        font-size: 1.2rem;
      }

      @media (max-width: 480px) {
        font-size: 1rem;
      }

      @media (max-width: 620px) {
        display: none;
      }
    }

    hr {
      display: none;
      width: 30px;
      border: none;
      border-top: 2px solid ${({ theme }) => theme.colors.primary};
      margin: 0 0.5rem;

      @media (max-width: 620px) {
        display: block;
      }
    }

    @media (max-width: 620px) {
      flex-direction: column;

      p {
        margin: 0;
      }

      hr {
        margin: 1rem 0;
      }
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <div className="home-name-wrapper">
        <motion.p
          className="home-name-1"
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          Eduardo
        </motion.p>
        <motion.p
          className="home-name-2"
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
        >
          Oliveira
        </motion.p>
      </div>
      <div className="home-subtitle">
        <motion.p
          className="home-subtitle-1"
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
        >
          Desenvolvedor Front-end
        </motion.p>
        <span>|</span> {/* Span visível acima de 540px */}
        <hr /> {/* HR visível abaixo de 540px */}
        <motion.p
          className="home-subtitle-2"
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
        >
          React
        </motion.p>
        <span>|</span> {/* Span visível acima de 540px */}
        <hr /> {/* HR visível abaixo de 540px */}
        <motion.p
          className="home-subtitle-3"
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, type: 'spring', stiffness: 120 }}
        >
          NextJS
        </motion.p>
      </div>
    </Section>
  );
};

export default Hero;

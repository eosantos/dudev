'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
}

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface ProjectCardProps {
  project: Project;
}

export const metadata = {
  title: 'Meu Site',
  description: 'Descrição do meu site',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </Card>
  );
};

export default ProjectCard;

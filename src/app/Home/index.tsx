import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

const sampleProject = {
  title: 'Meu Projeto',
  description: 'Descrição do meu projeto incrível.',
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ProjectCard project={sampleProject} />
    </>
  );
};

export default Home;

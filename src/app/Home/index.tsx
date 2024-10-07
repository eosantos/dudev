import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';

const sampleProject = {
  title: 'Meu Projeto',
  description: 'Descrição do meu projeto incrível.',
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <ProjectCard project={sampleProject} />
    </>
  );
};

export default Home;

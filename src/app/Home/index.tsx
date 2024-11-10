import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import ParallaxSeparator from '../components/ParallaxSeparator';

const sampleProject = {
  title: 'Meu Projeto',
  description: 'Descrição do meu projeto incrível.',
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ParallaxSeparator />
      <About />
      <ProjectCard project={sampleProject} />
      <ProjectCard project={sampleProject} />
      <ProjectCard project={sampleProject} />
    </>
  );
};

export default Home;

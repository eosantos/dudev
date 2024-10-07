// 'use client';

// import styled from 'styled-components';
// import { ThemeProvider } from 'styled-components';
// import { AppProps } from 'next/app';
// import { theme } from '../styles/theme'; // Verifique se o caminho está correto
// import GlobalStyle from '../styles/globalStyles'; // Verifique se o caminho está correto
// import Header from './components/Header';
// import Hero from './components/Hero';
// import ProjectCard from './components/ProjectCard';

// const sampleProject = {
//   title: "Meu Projeto",
//   description: "Descrição do meu projeto incrível."
// };

// console.log('Header:', Header);
// console.log('Hero:', Hero);
// console.log('ProjectCard:', ProjectCard);

// export default function Dudev({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <GlobalStyle />
//         <Header />
//         <Hero />
//         <ProjectCard project={sampleProject} /> {/* Passando um objeto válido */}
//         
//       </ThemeProvider>
//     </>
//   );
// }


'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/globalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';

 console.log('Header:', Header);
 console.log('Hero:', Hero);


export default function Dudev() {
  return (
    <>
      <ThemeProvider theme={theme}> 
        <GlobalStyle />     
        <Header />
        <Hero />
        {/* <ProjectCard project={sampleProject} /> */}
        {/* <Component {...pageProps} /> */}
      </ThemeProvider>      
    </>
  );
}

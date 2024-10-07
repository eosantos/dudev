'use client'; // Adicione esta linha no topo do arquivo

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/globalStyles';
import Header from './components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header /> {/* Header global */}
          {children} {/* Aqui carrega as páginas individuais */}
        </ThemeProvider>
      </body>
    </html>
  );
}

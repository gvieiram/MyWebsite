import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import { Portfolio } from './pages/Portfolio';
import { GlobalStyle } from './styles/global';
import light from './styles/themes/light';

export function App() {
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

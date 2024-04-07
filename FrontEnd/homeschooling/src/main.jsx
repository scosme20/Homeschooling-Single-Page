import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Estilos globais
const GlobalStyle = createGlobalStyle`
  /* Adicione estilos globais aqui */
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: #333;
    background: linear-gradient(to right, #ccc, #fff, #ccc, #fff); /* Gradiente linear em tons de cinza e branco */
    background-size: 400% 100%; /* Tamanho do gradiente */
    animation: gradientAnimation 10s ease infinite; /* Animação do gradiente */
  }

  /* Animação do gradiente linear infinito */
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  /* Outros estilos globais */
`;

// Renderiza o aplicativo com estilos globais
createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <App />
  </>
);


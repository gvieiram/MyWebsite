import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (desktop)
  html{
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.text};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  button, a {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Global exported styles
export const Text = styled.p`
  text-align: justify;
  white-space: pre-line;
  font-size: 1.15rem;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.dark_title};
  font-size: 2rem;
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 880px) {
    margin-bottom: 10px;
  }
`;

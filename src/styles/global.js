import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&subset=latin-ext');

  html{
    font-size: 16px;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
    font-size: 1rem;
    line-height: 1.5rem;
  }

  h1{
    font-size: 2rem;
    line-height: 3rem;
    font-weight: bold;
  }

  button{
    outline: 0;
    background-image: none;
  }
`;
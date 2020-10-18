import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${props => props.theme.fontFamily.sansSerif};
    font-size: 14px;
    color: ${props => props.theme.palette.text};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: ${props => props.theme.palette.primary};
      }
  }

  button, input, textarea {
    font-family: inherit;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

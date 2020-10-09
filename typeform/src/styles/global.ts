import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: var(--primary-color);
    line-height: 1.2;
  }

  body {
    background-color: var(--secundary-color);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    text-rendering: optimizeSpeed;
    margin: 0px 0px 20px;
  }


  :root {
    --primary-color: rgb(38,38,38);
    --secundary-color: #f5f1ea;
    --alert-color: hsl(7, 72%, 50%);
  }
`;
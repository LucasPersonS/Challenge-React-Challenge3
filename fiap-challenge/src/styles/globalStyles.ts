import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

body {
  display: flex;
  flex-direction: column;
  background: linear-gradient(120deg, #1943ff, #000000);
  overflow-x: hidden;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    overflow-x: hidden; 
  }
}

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
;`

export default GlobalStyle;
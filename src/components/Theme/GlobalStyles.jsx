
import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  
  .form-group input{
    color: ${({ theme }) => theme.text};
  }

  a{ 
    color: ${({ theme }) => theme.text};
  }

  .menu-icon .navicon {
    background: ${({ theme }) => theme.text};
  }

  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: ${({ theme }) => theme.text};
  }

  #menu{
    background: ${({ theme }) => theme.body};
    z-index: 50000;
  }

  #menu .linkText{
    font-weight: bold;
    font-size: 1.4rem;
  }

  `
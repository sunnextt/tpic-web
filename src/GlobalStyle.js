import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
${normalize()}

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,300;1,400&display=swap');

*,
*::after,
*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    @media only screen and (min-width: 900px) {
        font-size: 75%;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 87.5%;
    }    
}


body {
    transition: all 0.05s linear;
    width: 100%;
    height: 100vh;
    line-height: 2.1rem;
    font-style: normal;
    font-weight: 400;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f4f4f4;
    background: #f4f4f4;
    color:${(props) => props.theme.colors.red};
}


h1 {
    font-style: normal;
    font-family: 'Lato', sans-serif;
          text-align: left;



}
h2 {
     font-style: normal;
      font-family: 'Lato', sans-serif;
            text-align: left;


}
h3 {
    font-style: normal;
    font-family: 'Lato', sans-serif;
          text-align: left;


}
h4 {
    font-style: normal;
    font-family: 'Lato', sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    text-align: center;




}
h5 {
    font-style: normal;
    font-family: 'Lato', sans-serif;
    text-align: left;


}  
h6 {
    font-style: normal;
    font-family: 'Lato', sans-serif;
    font-size: 21px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;



}  
p{
    font-family: 'Lato', sans-serif;
    text-align: left;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
}

a {
    font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: #282828;

      &:hover {
        color: ${(props) => props.theme.colors.colorOrangePrimary};
      transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
      }
}


`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #F5F5F5;
}

button,
input {
    outline:0;
}

button {
  cursor: pointer;
}

`;
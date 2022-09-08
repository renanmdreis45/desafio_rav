import styled from "styled-components";

export const Container =  styled.div `
  position: relative;
  width: 100%;
  height: 768px;
  background: #F8F8F8;
`;

export const Header = styled.div `

  position: absolute;
  width: 279px;
  height: 41px;
  left: 125px;
  top: 91px;
  
  h2 {
    position: absolute;
    left: 0%;
    right: -35.44%;
    top: 0%;
    bottom: 49.82%;

    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #0E1227;
  }

`;

export const Interface = styled.div `
  position: absolute;
  width:1116px;
  height: 546px;
  left: 125px;
  top: 159px;
`;

export const Mov = styled.div `
  box-sizing: border-box;

  position:absolute;
  width: 458px;
  height: 362px;

  background: #FFFFFF;
  border: 2px solid #ECEEF7;
  border-radius: 6px;
`;


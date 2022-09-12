import styled from "styled-components";

export const Mov = styled.div `
  box-sizing: border-box;

  position:absolute;
  width: 458px;
  height: 362px;

  background: #FFFFFF;
  border: 2px solid #ECEEF7;
  border-radius: 6px;

  h2 {
    position: absolute;
    width: 190px;
    height: 34px;
    top: 30px;
    left: 35px;
    font-size: 22.4px;
    line-height: 33.6px;
    font-weight: 700;
    color: #000000;
  }
`;

export const Form = styled.form `

  position: absolute;
  top: 89px;
  left: 35px;
  
  input {
    border: 1px solid #7A869A;
    border-radius: 10px;
    box-sizing: border-box;
    padding-top: 8px;
    padding-left: 13px;
    padding-bottom: 10px;
  }

  input::placeholder {
    color: #7A869A;
    font-weight: 400;
    font-size:16px;
    line-height: 24px;
  }

  label {
    line-height:21px;
    font-size: 14px;
    letter-spacing: 0.01em;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    gap: 8px;
    
    position: absolute;
    width: 138px;
    height: 40px;
    left: calc(275.5px - 30px);
    top: 182px;
    padding: 8px 16px;

    border: none;
    background: #0889A3;
    border-radius: 30px;
    color: white;

    font-size: 14px;
    font-weight: 500px;
    line-height: 16px;

    img {
        width: 14px;
        height: 14px;
    }
  }
`;

export const ValueData = styled.div `
  display: flex;
  flex-direction: row;
  
`;

export const Value = styled.div `
  flex-itens: row;
  display:flex;
  flex-direction: column;

  input {
    margin-top: 7px;
    width: 189px;
    height: 42px;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  

  label {
    width:39px;
    font-weight: 600;
    font-family: Poppins;
  }

`;

export const Data = styled.div `
  flex-itens: row;
  display:flex;
  flex-direction: column;
  
  input {
    box-sizing: border-box;
    margin-top: 7px;
    margin-left: 10px;
    width: 189px;
    height: 42px;
    padding-top: 8px;
    padding-left: 13px;
    padding-bottom: 10px;
  }
  
  input::placeholder {
    color: #7A869A;
    font-weight: 400;
    font-size:16px;
    line-height: 24px;
  }

  label {
    width:35px;
    font-weight: 600;
    margin-left: 10px;
    font-family: Poppins;
  }
`;

export const Observacao = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  label {
    font-weight: 400;
    line-height: 21px;
    font-family: Poppins;
    span {
        font-weight: bold;
        font-family: Poppins;
    }
  }

  input {
    margin-top: 7px;
    width: 388px;
    height: 42px;
  }

  input::placeholder {
    color: #7A869A;
    font-weight: 400;
    font-size:16px;
    line-height: 24px;
  }
  
`;

export const Tipo = styled.div `
  margin-top: 16px;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    font-family: Poppins;
  }

`;

export const RecDesp = styled.div `
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 12px;
`;

export const Item = styled.div `
   position: relative;
   display: flex;
   flex-direction: row;
   flex-itens: row;
   align-items: center;
`;

export const LegendRadio = styled.span `
    margin-left: 8px;
    font-weight: 400;
    font-family: Roboto;
`;

export const RadioLabel = styled.label `
  position: absolute;
  top: 2.94%;
  left: 0%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;

  img {
    opacity: 0;
  }
`;

export const Radio = styled.input `
  z-index: 1;
  opacity: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
  
  &:checked + ${RadioLabel} {
      background: #0889A3;
      border: 2px solid #0889A3;
      
      img {
        opacity: 1;
        position: absolute;
        left: 0%;
        top: 15.95%;
      }
  }

  &:checked + ${RadioLabel} + ${LegendRadio}  {
    font-weight: 700;
  }
`;

export const Column = styled.td `
  font-weight: 600;
  text-align: left;
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 1px solid #DADADA;

  button {
    border:none;
    background-color: #FFFFFF;
    width: 24px;
    height: 24px;

    img {
      width: 14px;
      height: 18px;
    }
  }
`;

export const Grafico = styled.div `
  box-sizing: border-box;
  width: 583px;
  height: 362px;
  position: absolute;
  left:533px;

  background: #FFFFFF;
  border: 2px solid #ECEEF7;
  border-radius: 6px;
`;
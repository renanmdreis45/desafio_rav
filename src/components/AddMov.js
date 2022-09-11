import React, {useState, useContext } from 'react';
import { GlobalContext } from '../context/global';
import {Mov, Form, ValueData, Value, Data, Observacao, Tipo, RecDesp, Radio, RadioLabel} from "./styles/compStyles";
import Mais from './icons/mais.png'

export const AddMovement = () => {
  const [valor, setValor] = useState(null);
  const [data, setData] = useState('');
  const [obs, setObs] = useState('');
  const [receita, setReceita] = useState(false);
  const [despesa, setDespesa] = useState(false);
  const [tipo, setTipo] = useState('');


  const { addMovement } = useContext(GlobalContext);
  
  const handleChangeReceita = () => {
    setReceita(!receita);
    setTipo('Receita');
  }

  const handleChangeDespesa = () => {
    setDespesa(!despesa);
    setTipo('Despesa');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
 
    const newMov = {
        id: Math.floor(Math.random() * 100000000),
        valor: +valor,
        data,
        obs,
        tipo
    }
    
    addMovement(newMov);
  
  }

    return(
      <>
        <Mov>
          <h2> Movimentações </h2>
          <Form onSubmit={handleSubmit}>
            <ValueData>
                <Value>
                <label htmlFor="valor">Valor</label>
                <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} placeholder = "Digite o valor" />
                </Value>
                <Data>
                <label htmlFor="data">Data</label>
                <input type="text" value={data} onChange={(e) => setData(e.target.value)} placeholder = "Selecione a data" />
                </Data>
            </ValueData>
            <Observacao>
              <label htmlFor="obs"> <span> Observação  </span> (opcional)</label>
              <input type="text" value={obs} onChange={(e) => setObs(e.target.value)} placeholder="Digite a observação"></input>
            </Observacao>
            <Tipo>
              <p>Tipo de movimentação</p>
              <RecDesp>
                  <div>
                      <Radio type="radio" name="receita" value="Receita" checked={receita} onChange={handleChangeReceita} />
                      <RadioLabel />
                      <span> Receita </span>
                      <Radio type="radio" name="receita" value="Despesa" checked={despesa} onChange={handleChangeDespesa} />
                      <RadioLabel />
                      <span> Despesa </span>
                  </div>
              </RecDesp>
            </Tipo>
            <button> <img src={Mais} alt="sinal mais" /> ADICIONAR  </button>
          </Form>
        </Mov>
      </>
    );
}

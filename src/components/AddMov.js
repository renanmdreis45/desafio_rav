import React, {useState, useContext } from 'react';
import { GlobalContext } from '../context/global';
import {Mov, Form, ValueData, Value, Data, Observacao, Tipo, RecDesp, Item, Radio, RadioLabel, LegendRadio} from "./styles/compStyles";
import Check from './styles/check.png'
import Mais from './icons/mais.png'

export const AddMovement = () => {
  const [valor, setValor] = useState();
  const [data, setData] = useState('');
  const [obs, setObs] = useState('');
  const [receita, setReceita] = useState(false);
  const [despesa, setDespesa] = useState(false);
  const [tipo, setTipo] = useState('');


  const { addMovement } = useContext(GlobalContext);
  
  const handleChangeReceita = () => {
    setReceita(true);
    setTipo('Receita');
    setDespesa(false);
  }

  const handleChangeDespesa = () => {
    setDespesa(true);
    setTipo('Despesa');
    setReceita(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
 
    const newMov = {
        valor: +valor,
        data,
        obs,
        tipo
    }
    
    addMovement(newMov);

    setValor();
    setData('');
    setObs('');
    setDespesa(false);
    setReceita(false);
    setTipo('');

    clearFields(e);
  }

  function clearFields(event){
    Array.from(event.target).forEach( (e) => (e.value = ''))
 }

    return(
      <>
        <Mov>
          <h2> Movimentações </h2>
          <Form onSubmit={handleSubmit}>
            <ValueData>
                <Value>
                <label htmlFor="valor">Valor</label>
                <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} placeholder = "Digite o valor" required/>
                </Value>
                <Data>
                <label htmlFor="data">Data</label>
                <input type="text" value={data} onChange={(e) => setData(e.target.value)} placeholder = "Selecione a data" required/>
                </Data>
            </ValueData>
            <Observacao>
              <label htmlFor="obs"> <span> Observação  </span> (opcional)</label>
              <input type="text" value={obs} onChange={(e) => setObs(e.target.value)} placeholder="Digite a observação"></input>
            </Observacao>
            <Tipo>
              <p>Tipo de movimentação</p>
              <RecDesp>
                  <Item>
                      <Radio type="radio" name="receita" value="Receita" checked={receita} onChange={handleChangeReceita} required/>
                      <RadioLabel><img src={Check}/></RadioLabel>
                      <LegendRadio> Receita </LegendRadio>
                  </Item>
                  <Item>
                      <Radio type="radio" name="receita" value="Despesa" checked={despesa} onChange={handleChangeDespesa} required/>
                      <RadioLabel><img src={Check} alt="Check icon"/></RadioLabel>
                      <LegendRadio> Despesa </LegendRadio>
                  </Item>
              </RecDesp>
            </Tipo>
            <button> <img src={Mais} alt="sinal mais" /> ADICIONAR  </button>
          </Form>
        </Mov>
      </>
    );
}

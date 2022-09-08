import React, { useContext } from 'react';


export const  AddMov = () => {
  const [valor, setValor] = useState(0);
  const [data, setData] = useState('');
  const [obs, setObs] = useState('');
  const [receita, setReceita] = useState(false);
  const [despesa, setDespesa] = useState(false);
  const [tipo, setTipo] = useState('');
  const [countr, setCountr] = useState(0);
  const [countd, setCountd] = useState(0);

  const { addMov } = useContext(GlobalContext);
  
  const handleChangeReceita = () => {
    setReceita(!receita);
    setTipo('Receita');
  }

  const handleChangeDespesa = () => {
    setDespesa(!despesa);
    setTipo('Despesa');
  }

  const onSubmit = e => {
    e.preventDefault();

    tipo === 'Receita' ? setCountr(countr + 1) : setCountd(countd + 1);
 
    const newMov = {
        id: Math.floor(Math.random() * 100000000),
        valor: +valor,
        data,
        obs,
        tipo,
        countr,
        countd
    }

    addMov(newMov);
  
  }

    return(
      <>
        <h3> Movimentações </h3>
        <form onSubmit={onSubmit}>
          <div>
            <div>
              <label htmlFor="valor">Valor</label>
              <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} placeholder = "Digite o valor" />
            </div>
            <div>
              <label htmlFor="data">Valor</label>
              <input type="text" value={data} onChange={(e) => setData(e.target.value)} placeholder = "Selecione a data" />
            </div>
          </div>
          <div>
            <label htmlFor="obs">Observação (opcional)</label>
            <input type="text" value={obs} onChange={(e) => setObs(e.target.value)} placeholder="Digite a observação"></input>
          </div>
          <div>
            <label>Tipo de movimentação</label>
            <input type="checkbox" name="tipo" value="Receita" checked={receita} onChange={handleChangeReceita}></input>
            <label htmlFor="tipo">Receita</label>
            <input type="checkbox" name="tipo" value="Despesa" checked={despesa} onChange={handleChangeDespesa}>Despesa</input>
            <label htmlFor="tipo">Despesa</label>
          </div>

            

        </form>
      </>
    );
}

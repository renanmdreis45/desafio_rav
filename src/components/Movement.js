import React, {useContext} from 'react'
import { GlobalContext } from '../context/global'
import Remove from './icons/remove.png'
import { Column } from './styles/compStyles';

function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      'R$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i) {
          return num === '-' ? acc : num + (i && !(i % 3) ? '.' : '') + acc;
        }, '') +
      ',' +
      p[1]
    );
  }

export const Movement = ({movement}) => {
    

    const { deleteMovement } = useContext(GlobalContext);

    const handleClick = () => {

        deleteMovement(movement.id);

    }

    let type = movement.tipo === "Receita" ? "Receita" : "Despesa";

    return(
        <>
           <Column>{moneyFormatter(movement.valor)}</Column> 
           <Column>{movement.data}</Column> 
           <Column>{movement.obs}</Column> 
           <Column> <span className={type}>{movement.tipo}</span></Column> 
           <Column> <button onClick={handleClick}> <img src={Remove} alt="icon trash remove"/> </button> </Column>
        </>
    )
}
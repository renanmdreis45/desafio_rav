import React, { useContext, useEffect } from 'react';
import './styles/compStyles.css'
import { GlobalContext } from '../context/global';
import {Movement} from './Movement';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';

export const MovementList = () => {
  const { movements, getMovements } = useContext(GlobalContext);
  

  useEffect(() => {
    getMovements();
    
  }, []);


  const movementList = movements.map((movement) => (
    <tr  key = {movement._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
       <Movement movement = {movement} /> 
    </tr>
  ))
  
  return (
   <>
      <div className='list-table'>
        <div className='table-container'>
          <Table>
            <TableHead>
              <tr>
                 <td>Valor</td>
                 <td>Data</td> 
                 <td>Observação</td>
                 <td className="column-bold">Tipo de movimentação</td>
                 <td className="column-bold">Ações</td>
              </tr>
            </TableHead>
            <TableBody>
              {movementList}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
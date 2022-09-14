import React, {createContext, useReducer} from 'react';
import GlobalReducer from './reducer';
import  axios  from 'axios';

const initialState = {
    movements: [],
    error: null,
    loading: true        
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);
    
    async function getMovements() {
        try {
           const res = await axios.get('/movements');

           dispatch({
            type:'GET_MOVEMENTS',
            payload: res.data.data
           });

        } catch (err) {

           dispatch({
            type:'MOVEMENT_ERROR',
            payload: err.response.data.error
           });

        }

    }

    async function addMovement(movement) {
      const head = {
        headers: {
            'Content-Type': 'application/json'
        }
       }
       
       try {
          const res = await axios.post('/movements', movement, head);

          dispatch({
            type: 'ADD_MOVEMENT',
            payload: res.data.data
        });

        } catch(err) {
          dispatch({
             type: 'MOVEMENT_ERROR ',
             payload: err.response.data.error
        }); 

       }
    }

     async function deleteMovement(id) {

        try {
            await axios.delete(`/movements/${id}`);
  
            dispatch({
              type: 'DELETE_MOVEMENT',
              payload: id
          });
  
          } catch(err) {
            dispatch({
               type: 'MOVEMENT_ERROR ',
               payload: err.response.data.error
          }); 
  
         }
    }

    return (<GlobalContext.Provider value={{
        movements: state.movements,
        error: state.error,
        loading: state.loading,
        getMovements,
        deleteMovement,
        addMovement
    }}>
       {children} 
    </GlobalContext.Provider>);
}


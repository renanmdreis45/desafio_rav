import React, {createContext, useReducer} from 'react';
import GlobalReducer from './reducer';

const initialState = {
    movements: [
        {id: 1, valor: 1200, data: '12/02/2022', obs:'Pagamento faculdade', tipo: 'Despesa'}
    ]        
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    function addMovement(movement) {
        dispatch({
            type: 'ADD_MOVEMENT',
            payload: movement
        });
    }

    function deleteMovement(id) {
        dispatch({
            type:'DELETE_MOVEMENT',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{
        movements: state.movements,
        deleteMovement,
        addMovement
    }}>
       {children} 
    </GlobalContext.Provider>);
}


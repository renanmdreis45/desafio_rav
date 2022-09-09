import React, {createContext, useReducer} from 'react';
import GlobalReducer from './reducer';

const initialState = {
    movements: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    function addMovements(movement) {
        dispatch({
            type: 'ADD_MOVEMENTS',
            payload: movement
        });
    }

    function deleteMovements(id) {
        dispatch({
            type:'DELETE_MOVEMENTS',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{
        movements: state.movements,
        deleteMovements,
        addMovements
    }}>
       {children} 
    </GlobalContext.Provider>);
}


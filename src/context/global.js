import React, {createContext, useReducer} from 'react';
import GlobalReducer from './reducer';

const initialState = {
    movements: []
}

export const GlobalContext = createContext(initialState);



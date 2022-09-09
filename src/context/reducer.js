export default (state, action) => {
    switch(action.type) {
        case 'ADD_MOVEMENTS':
            return {
              ...state,
              movements: state.movements.filter(movement => movement.id !== action.payload)
            }
        
        case 'DELETE_MOVEMENTS':
            return {
                ...state,
                movements: [action.payload, ...state.movements]
            }
            
        default:
            return state;

    }
}
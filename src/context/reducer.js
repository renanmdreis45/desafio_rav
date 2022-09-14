export default (state, action) => {
    switch(action.type) {
        case 'GET_MOVEMENTS':
            return {
                ...state,
                loading: false,
                movements: action.payload
            }

        case 'ADD_MOVEMENT':
            return {
                ...state,
                movements: [...state.movements, action.payload]
            }

        case 'DELETE_MOVEMENT':
            return {
                ...state,
                movements: state.movements.filter(movement => movement._id !== action.payload)
            } 
        
        case 'MOVEMENT_ERROR':
            return {
              ...state,
              error: action.payload
            }

        default:
            return state;

    }
}
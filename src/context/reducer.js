export default (state, action) => {
    switch(action.type) {

        case 'ADD_MOVEMENT':
            return {
                ...state,
                movements: [action.payload, ...state.movements]
            }

        case 'DELETE_MOVEMENT':
            return {
                ...state,
                movements: state.movements.filter(movement => movement.id !== action.payload)
            } 
            
        default:
            return state;

    }
}
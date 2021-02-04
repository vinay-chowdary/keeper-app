
const notesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            state = [...state, action.payload]
            return state;
        case 'DELETE':
            return state.filter((note, index) => index !== action.payload);

        case 'FETCH_NOTES':
            console.log(action.payload);
            return [...state, ...action.payload]
        default:
            return state;
    }
}

export default notesReducer;
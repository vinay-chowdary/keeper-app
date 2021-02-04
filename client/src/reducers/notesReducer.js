
const notesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            state = [...state, ...action.payload]
            return state;
        case 'DELETE':
            return state.filter((note) => note._id !== action.payload);

        case 'FETCH_NOTES':
            return [...state, ...action.payload]

        case 'DELETE_ALL':
            state = [];
            return state;
        default:
            return state;
    }
}

export default notesReducer;
import data from "../data";

const notesReducer = (state = data, action) => {
    switch (action.type) {
        case 'ADD':
            state = [...state, action.payload]
            return state;
        case 'DELETE':
            return state.filter((note, index) => index !== action.payload);

        default:
            return state;
    }
}

export default notesReducer;
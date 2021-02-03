export const addNote = (newNote) => {
    return {
        type: 'ADD',
        payload: newNote
    };
};
export const deleteNote = (id) => {
    return {
        type: 'DELETE',
        payload: id
    };
};
export const increaseCount = () => {
    return {
        type: 'INCREASE'
    };
};
export const decreaseCount = () => {
    return {
        type: 'DECREASE'
    };
};
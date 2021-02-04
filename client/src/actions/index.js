export const addNote = newNote => dispatch => {
    fetch('api/notes/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'ADD',
            payload: data
        }))
};
export const deleteNote = (id) => dispatch => {
    fetch(`api/notes/delete/${id}`, {
        method: 'DELETE',
    }).then(res => res.json()).then((deletedNote) => dispatch({
        type: 'DELETE',
        payload: id
    }))
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

export const fetchNotes = () => dispatch => {
    fetch('api/notes')
        .then(res => res.json())
        .then(notes => dispatch({
            type: 'FETCH_NOTES',
            payload: notes
        }));
}

export const deleteAll = () => dispatch => {
    fetch('api/notes', {
        method: 'DELETE',
    }).then(res => res.json()).then(data => dispatch({
        type: 'DELETE_ALL'
    }))
};
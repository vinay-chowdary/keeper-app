import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


function NewNote(props) {
    const [newNote, setNewNote] = useState({
        Title: "",
        Content: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setNewNote((prevState) => ({ ...prevState, [name]: value }))
    }
    return (
        <div className="newNote container">
            <form
                autoComplete="off"
                onSubmit={(e) => {
                    props.onAdd(newNote);
                    setNewNote({
                        Title: "",
                        Content: ""
                    })
                    e.preventDefault();
                }}
            >
                <div>
                    <input
                        name="Title"
                        id="todoTitle"
                        placeholder="Title"
                        value={newNote.Title}
                        onChange={handleChange}
                        required={true}
                        rows="2"
                        spellCheck="false"
                    >
                    </input>
                </div>
                <div>
                    <textarea
                        name="Content"
                        id="todotext"
                        placeholder="take a note"
                        value={newNote.Content}
                        onChange={handleChange}
                        required
                        rows="3"
                        spellCheck="false"
                    >
                    </textarea>
                </div>
                <Fab type="submit" color="#00adb5" aria-label="add" className="addBtn">
                    <AddIcon />
                </Fab>
            </form>
        </div>
    );
}

export { NewNote };
import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function NewNote(props) {
    const [newNote, setNewNote] = useState({
        Title: "",
        Content: ""
    });
    const [displayTitle, setDisplayTitle] = useState(false);
    function handleChange(event) {
        const { name, value } = event.target;
        setNewNote((prevState) => ({ ...prevState, [name]: value }))
    }
    const handleClick = (event) => {
        setDisplayTitle(true);
    }
    return (
        <div className="newNote container">
            <form
                autoComplete="off"
                onSubmit={(e) => {
                    if (newNote.Title && newNote.Content) {
                        props.onAdd(newNote);
                        setDisplayTitle(false);

                        setNewNote({
                            Title: "",
                            Content: ""
                        })
                    }
                    e.preventDefault();
                }}
            >
                {displayTitle &&
                    <input
                        name="Title"
                        id="todoTitle"
                        placeholder="Title"
                        value={newNote.Title}
                        onChange={handleChange}
                        required={true}
                        spellCheck="false"
                        autoFocus={true}
                    >
                    </input>
                }
                <TextareaAutosize
                    onClick={handleClick}
                    name="Content"
                    id="todotext"
                    className="textarea"
                    placeholder="take a note"
                    value={newNote.Content}
                    onChange={handleChange}
                    required
                    rowsMin="1"
                    rowsMax="7"
                    spellCheck="false"
                />
                {displayTitle && <Zoom timeout={700} in={true}>
                    <Fab type="submit" color="#00adb5" aria-label="add" className="addBtn">
                        <AddIcon />
                    </Fab>
                </Zoom>}
            </form>
        </div>
    );
}

export { NewNote };
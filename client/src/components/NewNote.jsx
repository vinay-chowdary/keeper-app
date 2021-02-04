import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useDispatch } from 'react-redux'
// import { connect } from 'react-redux'
import { addNote } from '../actions'

function NewNote(props) {
    const dispatch = useDispatch()

    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
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
                    e.preventDefault();
                    if (newNote.title && newNote.content) {

                        // props.addNote(newNote)
                        dispatch(addNote(newNote))


                        setDisplayTitle(false);

                        setNewNote({
                            title: "",
                            content: ""
                        })
                    }

                }}
            >
                {displayTitle &&
                    <input
                        name="title"
                        id="todoTitle"
                        placeholder="Title"
                        value={newNote.title}
                        onChange={handleChange}
                        required={true}
                        spellCheck="false"
                        autoFocus={true}
                    >
                    </input>
                }
                <TextareaAutosize
                    onClick={handleClick}
                    name="content"
                    id="todotext"
                    className="textarea"
                    placeholder="take a note"
                    value={newNote.content}
                    onChange={handleChange}
                    required
                    rowsMin="1"
                    rowsMax="7"
                    spellCheck="false"
                />
                {displayTitle && <Zoom timeout={700} in={true}>
                    <Fab type="submit" aria-label="add" className="addBtn">
                        <AddIcon />
                    </Fab>
                </Zoom>}
            </form>
        </div>
    );
}

// const matchDispatchToProps = (dispatch) => {
//     return {
//         addNote: (newNote) => { dispatch(addNote(newNote)) }
//     }
// }
// export default connect(null, matchDispatchToProps)(NewNote);
export default NewNote;
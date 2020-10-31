import React, { useState } from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { NewNote } from './NewNote';
import { Note } from "./Note"
import data from "./data"


function App() {
    const [notes, setNotes] = useState(data);
    function addNote(newNote) {
        setNotes((prevNotes) =>
            [newNote, ...prevNotes]
        );

    }
    function deleteNote(id) {
        setNotes(notes.filter((note, index) => index !== id));
    }
    return (
        <div>
            <Header />
            <NewNote onAdd={addNote} />
            <div className="grid container">
                {
                    notes.map((note, index) => (
                        <Note
                            key={index}
                            id={index}
                            title={note.Title}
                            text={note.Content}
                            onDelete={deleteNote}
                        />))
                }
            </div>
            <Footer />
        </div>
    );
}

export default App;
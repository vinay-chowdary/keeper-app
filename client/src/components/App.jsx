import { Header } from './Header';
import { Footer } from './Footer';
import NewNote from './NewNote';
import { Note } from "./Note";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchNotes } from '../actions'


// import { connect } from 'react-redux'


function App(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        console.log("helllllooooo");
        dispatch(fetchNotes())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //can also be done with mapStateToProps as said at bottom of this component
    const notes = useSelector(state => state.notes)
    return (
        <div>
            <Header count={notes.length} />
            <NewNote />
            <div className="grid container">
                {
                    // props.notes.map((note, index) => (
                    notes.map((note) => (
                        <Note
                            key={note._id}
                            id={note._id}
                            title={note.title}
                            text={note.content}
                        />))
                }
            </div>
            <Footer />
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         notes: state.notes
//     }
// }
// export default connect(mapStateToProps)(App);

export default App;
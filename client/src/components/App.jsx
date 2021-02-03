import { Header } from './Header';
import { Footer } from './Footer';
import NewNote from './NewNote';
import { Note } from "./Note";
import { useSelector } from 'react-redux'

// import { connect } from 'react-redux'


function App(props) {

    //can also be done with mapStateToProps as said at bottom of this component
    const notes = useSelector(state => state.notes)
    return (
        <div>
            <Header />
            <NewNote />
            <div className="grid container">
                {
                    // props.notes.map((note, index) => (
                    notes.map((note, index) => (
                        <Note
                            key={index}
                            id={index}
                            title={note.Title}
                            text={note.Content}
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
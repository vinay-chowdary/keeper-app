import notesReducer from './notesReducer'
import totalReducer from './totalReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    notes: notesReducer,
    totalNotesCount: totalReducer
})

export default rootReducer;
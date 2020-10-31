import { combineReducers } from 'redux'
import todos from './todo-reducer'
import filter from "./filter-reducer"

const rootReducer = combineReducers({
    todos,
    filter
})


export default rootReducer;
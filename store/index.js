import {createStore, combineReducers} from 'redux'
import SubjectsReduccer from './subjects'

const INITIAL_STATE = {
    name: 'pepe'
}

function reduccer(state = INITIAL_STATE, {type, payload}) {
    return state
}

export default createStore(combineReducers({reduccer, SubjectsReduccer}))
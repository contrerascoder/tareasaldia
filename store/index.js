import {createStore} from 'redux'

const INITIAL_STATE = {
    name: 'pepe'
}

function reduccer(state = INITIAL_STATE, {type, payload}) {
    return state
}

export default createStore(reduccer)
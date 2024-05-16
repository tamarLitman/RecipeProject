import { produce } from 'immer'
import { createStore } from 'redux'
import { getUsers } from '../api'

const initialState = {
    currentUser: "",
    administrator: {
        email:"a@a",
        password:"a"
    },
    isAdmin:false
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return { ...state, currentUser: action.payload }

        case 'SET_IS_ADMIN':
            return { ...state, isAdmin: action.payload }

        default:
            break;
    }
}, initialState)

const store = createStore(reducer)
export default store;
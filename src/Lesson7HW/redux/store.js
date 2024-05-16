import { produce } from 'immer'
import { createStore } from 'redux'

const initialState = {
    users: [
        { username: 'a', password: '1' },
    ],
    currentUser: {},
    items: [{name:'rice',calories:'80',price:'5'}]
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return { ...state, currentUser: action.payload }

        case 'ADD_USER':
            return { ...state, users: [...state.users, action.payload] }

        case 'DELETE_USER':
            let user = state.users.filter(u => u.username == action.payload.username && u.password == action.payload.password)[0]
            const i = state.users.indexof(user)
            let list = state.users.splice(i, 1)
            return { ...state, users: list }
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, action.payload] }
        case 'DELETE_ITEM':
            let item=state.items.filter(it=>it.name==action.payload.name)[0]
            const i1=state.items.indexof(item)
            let list1=state.items.splice(i1,1)
            return {...state,items:list1}

        default:
            break;
    }
}, initialState)

const store = createStore(reducer)
export default store;
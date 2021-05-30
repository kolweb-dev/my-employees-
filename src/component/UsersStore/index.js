import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {getUsers} from "../data/data";

const START_LOADING = 'START_LOADING';
const HANDLE_SUCCESS = 'HANDLE_SUCCESS';
const HANDLE_ERROR = 'HANDLE_ERROR ';

export const startLoading = () => ({type: START_LOADING})
export const handleError = () => ({type: HANDLE_ERROR})

export const handleSuccess = (users) => ({
    type: HANDLE_SUCCESS,
    users
})

export const loadUsers = () => {
    return (dispatch) => {
        store.dispatch(startLoading());

        return getUsers()
            .then((users) => store.dispatch(handleSuccess(users)))
            .catch(() => store.dispatch(handleError()))
    }
}


const initialState = {
    users: [],
    isLoading: false,
    hasError: false,
    activeUsers: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        case HANDLE_SUCCESS:
            return {
                ...state,
                users: action.users,
                isLoading: false
            }
        case HANDLE_ERROR:
            return {
                ...state,
                hasError: true,
                isLoading: false
            }

        default:
            return state;
    }
}

if (!localStorage.getItem('activeUsers')) {
    localStorage.setItem('activeUsers', JSON.stringify([]))
}


const store = createStore(reducer, initialState, applyMiddleware(thunk));

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
})


export default store;



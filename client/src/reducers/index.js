import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import {fileReducer} from './fileReducer'
import {userReducer} from './userReducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
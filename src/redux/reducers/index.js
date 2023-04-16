import {filesInfoReducer} from './filesInfoReducer'
import {selectedFileInfoReducer} from './selectedFileInfoReducer'
import {combineReducers} from 'redux'


export const rootReducer = combineReducers({filesInfoReducer,selectedFileInfoReducer});
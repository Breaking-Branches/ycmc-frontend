import {filesInfoReducer} from './filesInfoReducer'
import {selectedFileInfoReducer} from './selectedFileInfoReducer'
import {finalDataReducer} from './finalDataReducer'
import {combineReducers} from 'redux'


export const rootReducer = combineReducers({filesInfoReducer,selectedFileInfoReducer,finalDataReducer});
import React from 'react'
import {ADD_ALL,REMOVE,REMOVE_ALL,FETCH,ERROR} from '../constants/fileInfoConstant'
const initial_state = {}

export function filesInfoReducer(state=initial_state,action) {

    switch(action.type){

        case FETCH:
            return action.payload
        
        case ERROR:
            return action.payload
        
        default:
            return state
        
    }

}

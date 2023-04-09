import React from 'react'
import {ADD_ALL,REMOVE,REMOVE_ALL,FETCH} from '../constants/fileInfoConstant'
initial_state = {}


export default function filesInfoReducer(state=initial_state,action) {

    switch(action.type){

        case FETCH:
            return action.payload

        case REMOVE:
            
        case REMOVE_ALL:
        
        case ADD_ALL:
        
        default:
            return state
        
    }

}

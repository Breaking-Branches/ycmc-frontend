import {FETCH} from '../constants/fileInfoConstant'
const initial_state = {}

export function filesInfoReducer(state=initial_state,action) {

    switch(action.type){

        case FETCH:
            return {...action.payload}
      
        default:
            return state
        
    }

}

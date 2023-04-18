import {GET_SIMILARITY} from '../constants/fileInfoConstant'
const initial_state = []

export function finalDataReducer(state=initial_state,action) {

    switch(action.type){

        case GET_SIMILARITY:
            return [...action.payload]
      
        default:
            return state
        
    }

}

import {CHANGE,FETCH,ADD} from '../constants/fileInfoConstant'
const initial_state = {}

export function filesInfoReducer(state=initial_state,action) {

    switch(action.type){

        case FETCH:
            return action.payload
        
        case ADD:
            return action.payload
        
        case CHANGE:
            const payload = action.payload
            state[payload.reponame][payload.extension] = payload.data
            return state
        
        default:
            return state
        
    }

}

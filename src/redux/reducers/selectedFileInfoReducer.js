import {CHANGE,FETCH,ADD} from '../constants/fileInfoConstant'
const initial_state = {}

export function filesInfoReducer(state=initial_state,action) {

    switch(action.type){

        case FETCH:
            return action.payload
        
        case ADD:
            return action.payload
        
        case CHANGE:
            const { reponame, extension, data } = action.payload;
            return {
                ...state,
                [reponame]: {
                  ...state[reponame],
                  [extension]: data
                }
              };
        
        default:
            return state
        
    }

}

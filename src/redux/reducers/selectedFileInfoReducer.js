import {UPDATE_FILES,INITIAL_SETUP} from '../constants/fileInfoConstant'
const initial_state = {}

export function selectedFileInfoReducer(state=initial_state,action) {

    switch(action.type){
        case INITIAL_SETUP:
            const repo1 = Object.keys(action.payload)[0]
            const repo2 = Object.keys(action.payload)[1]
            return {[repo1]:{},[repo2]:{}}
            
            case UPDATE_FILES:
            const {reponame,extension,data} = action.payload
            const sank = {
                ...state,   
                [reponame]:{
                    ...state[reponame],
                    [extension]:data
                }
            } 
            return sank

        default:
            return state
    }


}

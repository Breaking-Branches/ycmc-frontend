import {UPDATE_FILES,INITIAL_SETUP} from '../constants/fileInfoConstant'

export function updateFiles(data) {
    const [reponame,extension,arr] = data
    return {
        type:UPDATE_FILES,
        payload:{
            reponame:reponame,
            extension:extension,
            data:arr
        }
    }
    
}

export function initialSetup(data) {
    return {
        type:INITIAL_SETUP,
        payload:data
        
    }
    
}





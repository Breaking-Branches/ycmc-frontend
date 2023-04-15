import {FETCH,CHANGE} from '../constants/fileInfoConstant'
export function filesInfoFetchAction(data) {

    return {
        type:FETCH,
        payload:data
    }

}
export function Change(data) {
    const [reponame,extension,arr] = data
    return {
        type:CHANGE,
        payload:{
            reponame:reponame,
            extension:extension,
            data:arr
        }
    }
}


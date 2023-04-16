import {FETCH} from '../constants/fileInfoConstant'
export function filesInfoFetchAction(data) {

    return {
        type:FETCH,
        payload:data
    }

}

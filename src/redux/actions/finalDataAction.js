import {GET_SIMILARITY} from '../constants/fileInfoConstant'
export function getSimilarityAction(data) {

    return {
        type:GET_SIMILARITY,
        payload:data
    }

}

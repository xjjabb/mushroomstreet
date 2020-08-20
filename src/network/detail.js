import {request} from './index.js'

export function getDetail(iid){
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
import {request} from './index.js';

export function getHomeMultdata(){
    return request({
        url: '/home/multidata'
    })
}
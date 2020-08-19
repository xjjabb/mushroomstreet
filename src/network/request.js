import axios from 'axios'

export function request(config){
    const insatance=axios.create({
        baseURL: 'http://152.136.185.210:8000/api/z8',
        timeout: 10000,
    });
    return insatance(config);
}
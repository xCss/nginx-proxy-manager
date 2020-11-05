import {get,post} from './axios'
import {LOGIN} from './apiMap'
export default {
    login(data){
        return post(LOGIN,data)
    }
}
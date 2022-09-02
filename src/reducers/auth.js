import { REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT } from "../actions/types";

const user = localStorage.getItem('user');
const initialState = user ? {isLoggedin:true,user} : {isLoggedin:false,user:null}

export default function(state = initialState , action) {
    const {type,payload} = action
    switch(type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedin:false
            }
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedin:false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedin:true,
                user:payload.user
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedin:false,
                user:null
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedin:false,
                user:null
                }
        default:
            return state                         
    }

}
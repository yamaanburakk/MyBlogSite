//Using axios to making HTTP request. Store or get JWT from Browser Local Storage

import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/"
class AuthService {
    login(username,password) { //save JWT token to local storage (POST)
        return axios
        .post(API_URL+ "signin" ,{username,password})
        .then((response) => {
            if(response.data.accessToken){
                localStorage.setItem("user",JSON.stringify(response.data))
            }
            return response.data
        })
    }
    logout() { // remove JWT token from local storage
        localStorage.removeItem("user")
    }
    register(username,email,password) { //(POST)
        return axios.post(API_URL + "signup", {username,email,password})
    }
}

export default new AuthService()
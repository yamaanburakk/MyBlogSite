//Check the Local Storage .If there is logged from user with JWT, return HTTP Autharization header
export default function authHeader () {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user && user.accessToken) {
        return {Authorization : "Bearer" + user.accessToken} //return object which includes JWT which currenly logged in user from local storage
        // For Node Js Backend
        //  return {Authorization : "x-access-token" + user.accessToken}
    } else {
        return {}
    }
}
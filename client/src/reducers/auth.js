
import setAuthToken from '../utilies/setAuthToken'
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,

}

const auth = (state=initialState, action) => {
    const { type, payload} = action
    switch(type){
        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":
            localStorage.setItem('token', payload)
            setAuthToken(payload)
            return{
                ...state,
                isAuthenticated: true,
                token: payload,
            }
        case "AUTH_FAIL":
        case "REGISTER_FAIL":
            return{
                ...state,
                isAuthenticated: false,
            }
        case "LOGOUT":
            localStorage.removeItem('token')
               return{
                token:null,
                isAuthenticated:false,
            }
        default:
            return state
    }

}

export default auth

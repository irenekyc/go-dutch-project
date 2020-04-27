import setAuthToken from '../utilies/setAuthToken'
import axios from 'axios'

const login =  (email, password)=> async dispatch =>{
    if (localStorage.token){
        setAuthToken(localStorage.token)
    }
    try{
        const config = {
            headers:{
                'content-type': 'application/JSON'
            }
        }
        const res = await axios.post('/api/auth', {email, password}, config)

        dispatch( {
            type: "LOGIN_SUCCESS",
            payload: res.data.token
        })
    }
    catch(err){
        dispatch({
            type: "AUTH_FAIL",
        })
    }

}

export default login
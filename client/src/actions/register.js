import axios from 'axios'

const register =  (name, email, password)=> async dispatch =>{
    try{
        const config = {
            headers:{
                'content-type': 'application/JSON'
            }
        }
        const res = await axios.post('/api/users', {name, email, password}, config)

        dispatch( {
            type: "REGISTER_SUCCESS",
            payload: res.data.token
        })
    }
    catch(err){
        dispatch({
            type: "REGISTER_FAIL",
        })
    }

}

export default register
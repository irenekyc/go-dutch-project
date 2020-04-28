import axios from 'axios'
export const getProfile =  ()=> async dispatch=>{
   
    const res = await axios.get('/api/profile/me')
   
    try{
        dispatch({
            type: "GET_PROFILE",
            payload: res.data
        })

    }
    catch(err){
        console.error(err.message)
    }    

}

export const getUser = ()=> async dispatch =>{
    const res = await axios.get('/api/users')
    dispatch({
        type: "GET_USER",
        payload: res.data
    })
    console.log(res.data)
}



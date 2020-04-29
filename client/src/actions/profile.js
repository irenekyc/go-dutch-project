import axios from 'axios'


export const getUser = ()=> async dispatch =>{
    const res = await axios.get('/api/users')
    dispatch({
        type: "GET_USER",
        payload: res.data
    })

    console.log(res.data)
}

export const updateUser = (id, name, email, location, bio)=> async dispatch =>{
 
    const res = await axios.put('/api/users', { id, name, email, location, bio })
    dispatch({
        type: "UPDATE_USER",
        payload: res.data
    })

}

import axios from 'axios'

export const addCollection = (collectionId, userId)=> async dispatch=>{
    if(userId){
        const res = await axios.post(`/api/collections/addCollections/${collectionId}`)
        dispatch({
            type: "ADD_COLLECTIONS",
            payload: res.data
        })
        console.log(res.data)
    }
    
}


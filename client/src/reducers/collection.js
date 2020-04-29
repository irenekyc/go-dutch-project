const initialState = {
    loading: true,
    isAuth: false,
    theme: null,
    done: false
}

const Collection = (state=initialState, action)=>{
    const {type, payload} = action
    switch(type){
        case "ADD_COLLECTION":
            return {
                ...state,
                done: true,
                theme: payload
            }
        default:
            return state
        
    }
}

export default Collection
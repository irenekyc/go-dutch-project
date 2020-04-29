
const initialState = {
    loading: true,
    isAuthenticated: false,
    user:null,
}

const user = (state=initialState, action) => {
    const { type, payload} = action
    switch(type){
        case "GET_USER":
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                user: payload,
            }
        case "CLEAR_USER":
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                user:null,
            }
        case "UPDATE_USER":
            return{
                ...state,
                loading: false,
                user: payload,
            }


        default:
            return state
    }

}

export default user

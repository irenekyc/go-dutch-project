
const initialState = {
    loading: true,
    isAuthenticated: false,
    user:null,
    profile: null,
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
        case "GET_PROFILE":
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                profile: payload,
            }
        case "CLEAR_USER":
        case "CLEAR_PROFILE":
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                user:null,
                profile:null,
            }
        default:
            return state
    }

}

export default user

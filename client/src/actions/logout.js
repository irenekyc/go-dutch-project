

const logout = ()=> dispatch =>{
        dispatch( {
            type: "LOGOUT"
        })
        dispatch({
            type:"CLEAR_PROFILE"
        })
        dispatch({
            type:"CLEAR_USER"
        })
    }


export default logout
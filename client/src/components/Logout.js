import React, {useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logout from '../actions/logout'
import { Redirect } from 'react-router-dom'

const Logout = ()=>{
    const dispatch = useDispatch()
    const LoginStatus = useSelector(state=> state.Auth.isAuthenticated)
    useEffect(()=>{
        dispatch(logout())
    }, [logout])

    if (!LoginStatus){
        return <Redirect to="/" />
    }

    return(
        <div> <h1> Logging out, hope to see you again soon</h1></div>
    )

}

export default Logout
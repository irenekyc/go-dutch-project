import React, {Fragment, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import login from '../actions/login'



const Login = ()=>{
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.Auth.isAuthenticated)


    const [data, setData]= useState({
        email: "",
        password: ""
    })

    const { email, password } = data

    const onChangeHandler = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        dispatch(login(email, password))
    }

    if(isAuth){
       return <Redirect to="/collections" />
    }


    // const submitData = async (email, password)=> {
    //     const config ={
    //         headers:{
    //             'Content-Type': "Application/JSON"
    //         }
    //     }
    //     try{
    //         const res = await axios.post('/api/auth', {email, password}, config)
    //         console.log(res.data)

    //     }
    //     catch(err){
    //         console.log(err)
    //     }

    // }

    return(
         <Fragment>
         
            <h1 className="large text-primary-blue"> Sign In  </h1>
            <form className="form" onSubmit={e=> onSubmitHandler(e)}>
            <div class="form-group">
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=> onChangeHandler(e)}/>
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" name="password" value={password} onChange={e=> onChangeHandler(e)} />
            </div>
     
            <div class="form-group">
                <input type="submit" class="btn btn-primary-red" value="Submit" />
            </div>
            <p class="my-1"> Don't have an account? <Link to="/register"> Sign up</Link></p>
            </form>
 
         </Fragment>

    )
}

export default Login
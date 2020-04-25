import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Register = ()=>{
    const [formData, setFormData]= useState({
        name: "",
        email: "",
        password: "" ,
        password2: ""     
    })

    const { name, email, password, password2} = formData

    const onChangeHandler = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        submitData(name, email, password)
    }

    const submitData = async (name, email, password)=>{
        const config= {
            headers:{
                'content-type': "application/JSON"
            }
        }
        try{
            const res = await axios.post('/api/users/', {name, email, password}, config)
            console.log(res.data)
        }
        catch(err){
            console.log(err.message)

        }
    }

    return(
         <Fragment>
             <h1 className="large text-primary-blue"> Sign Up  </h1>
             <p className="lead"> <i className="fas fa-user"></i> Create an account to access to unlimited resources for Free!</p>
            <form className="form" onSubmit={e=> onSubmitHandler(e)}>
            <div className="form-group">
                <input type="text" placeholder="Name" name="name" value={name} onChange={e=> onChangeHandler(e)}/>
            </div>
            <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=> onChangeHandler(e)}/>
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" name="password" value={password} onChange={e=> onChangeHandler(e)}/>
            </div>
            <div className="form-group">
                <input type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={e=> onChangeHandler(e)}/>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-primary-red" value="Submit" />
            </div>
         </form>
        <p className="my-1"> Already have an account? <Link to="/login"> Sign In</Link></p>
         </Fragment>

    )
}

export default Register
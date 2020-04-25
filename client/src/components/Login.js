import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const Login = ()=>{

    return(
         <Fragment>
         
            <h1 className="large text-primary-blue"> Sign In  </h1>
            <form className="form">
            <div class="form-group">
                <input type="email" placeholder="Email Address" />
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" />
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
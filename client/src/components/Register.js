import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const Register = ()=>{

    return(
         <Fragment>
             <h1 class="large text-primary-blue"> Sign Up  </h1>
             <p class="lead"> <i class="fas fa-user"></i> Create an account to access to unlimited resources for Free!</p>
            <form class="form">
            <div class="form-group">
                <input type="text" placeholder="Name" />
            </div>
            <div class="form-group">
                <input type="email" placeholder="Email Address" />
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" />
            </div>
            <div class="form-group">
                <input type="password" placeholder="Confirm Password" />
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary-red" value="Submit" />
            </div>
         </form>
        <p class="my-1"> Already have an account? <Link to="/login"> Sign In</Link></p>
         </Fragment>

    )
}

export default Register
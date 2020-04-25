import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const Register = ()=>{

    return(
         <Fragment>
              <h1 className="large text-primary-blue"> Collections </h1>
              <p className="lead"> <i className="fas fa-book-open"></i> Start your learning journey </p>
            <div className="collections">

                <div className="collection bg-light">
                  <span><i className="fas fa-book"></i> 
                    <Link to="/collections/123"> 
                        <span className="link-primary"> <strong> Basic Conversation</strong></span></Link> 
                     </span> 
                    <p className="small link-blue" href="login.html"> <i className="fas fa-plus"></i> Add to my collections </p>
                </div>

                <div className="collection bg-light">
                    <span><i className="fas fa-book"></i><a href="collection.html" className="link-primary"> <strong> Numbers</strong></a> </span> 
                    <a className="small link-blue" href="login.html"><i className="fas fa-plus"></i> Add to my collections </a>
                 </div>

                <div className="collection bg-light">
                    <span><i className="fas fa-book"></i><a href="collection.html" className="link-primary"> <strong> Travel Essentials</strong></a> </span> 
                    <a className="small link-blue" href="login.html"> <i className="fas fa-plus"></i> Add to my collections </a>
                </div>  
            </div>
   
         </Fragment>

    )
}

export default Register
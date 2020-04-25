import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'


const Collection = ()=>{
    return(
        <Fragment>
        <Link to="/collections"> <p className="btn my-1"> Back to all collections </p></Link>
        <h1 className="large text-primary-blue"> Basic Conversation</h1>
        <div className="content-card bg-light">
            <div>
                <p className="lead link-blue"> <i className="fas fa-arrow-left"></i></p>
            </div>
            <div className="main-content">
                <p className="large text-primary-blue"> <i className="far fa-comments"></i> Hallo!</p>
                <p> Hello </p>
            </div>
            <div>
                <p className="lead link-blue"> <i className="fas fa-arrow-right"></i></p>
            </div>
            
        </div>
        </Fragment>
    )
}

export default Collection
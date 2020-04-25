import React from 'react'
import {Link} from 'react-router-dom'

const Landing = ()=>{
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large"> Go-Dutch</h1>
                    <p className="lead"> We make language learning simple, join our community for free today </p>
                    <div className="buttons">
                        <Link to="/register"> <p className="btn btn-primary-red"> Start for free </p></Link>
                        <Link to="/login"><p className="btn btn-primary-blue"> Login </p> </Link>
                    </div>
            </div>
            </div>
         </section>
    )
}

export default Landing
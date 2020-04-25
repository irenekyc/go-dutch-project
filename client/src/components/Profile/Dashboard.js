import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = ()=>{
    return(
        <Fragment>
             <h1 className="large text-center p-1"> My Dashboard</h1>
                <div className="dashboard-grid">
                    <div className="my-profile bg-light">
                        <p className="lead"> <span className="text-primary-blue">Hallo!</span> Irene</p>
                        <p className="large"><i className="fas fa-user"></i></p>
                        <p> Location: Hong Kong</p>
                        <p> Member since: May 2020</p>
                        <p><i className="fas fa-crown"></i> Beginner </p>
                        <div className="buttons"> 
                            <Link to="/edit-profile"><p className="btn btn-primary"><i className="fas fa-edit"></i> Edit </p></Link>
                        </div>
                     </div>
                <div className="my-collections bg-light">
                      <p className="lead text-center"> My Collections </p>
                        <ul>
                            <li> <Link to="/collections/123"><span className="flex-1 bold py-1 bold">Basic Conversation</span> </Link>
                             <span className="text-primary-red show-on-hover"> <i className="link-red fas fa-times"></i></span>
                            </li>
                            <li> <Link to="/collections/123"><span className="flex-1 bold py-1 bold">Numbers</span> </Link>
                             <span className="text-primary-red show-on-hover"> <i className="link-red fas fa-times"></i></span>
                            </li>
                         </ul>
    
                 </div>
                <div className="my-achievement bg-light">
                    <p className="lead text-center"> Achievement </p>
                    <p> Features coming soon </p>
                 </div>
         </div>
        </Fragment>

    )

}

export default Dashboard
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getUser, getProfile} from '../../actions/profile'


const Dashboard = ()=>{
    const dispatch = useDispatch()
    const [user, setUser]= useState({
        name: null,
        email: null,
        ready: false,
    })

    const userData = useSelector(state => state.User.user)
    const profileData = useSelector(state=> state.User.profile)


    //load user
    useEffect(()=>{
        dispatch(getUser())
        dispatch(getProfile())
     
    }, [getUser])



    return(
        <Fragment>
            {userData? <Fragment>
                <h1 className="large text-center p-1"> My Dashboard</h1>
                <div className="dashboard-grid">
                    <div className="my-profile bg-light">
                        <p className="lead"> <span className="text-primary-blue">Hallo!</span> {userData.name} </p>
                        <p className="large"><i className="fas fa-user"></i></p>
                        {profileData && profileData.location? <p> Location: {profileData.location} </p>  : <p> *Tell us about your location</p>} 
                        <p> Member since: {userData.date}</p>
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
                : null}
             
        </Fragment>

    )

}

export default Dashboard
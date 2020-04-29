import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getUser} from '../../actions/profile'


const Dashboard = ()=>{
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getUser())
    }, [getUser])


    const userData = useSelector(state => state.User.user)
 

    
  
    const [user, setUser]= useState({
        name: userData.name,
        email: userData.email,
        memberSince: userData.date,
        location:  userData.location || null,
        bio:  userData.bio || null,
        favourites: userData.favourites || null,
        ready: false,

    })
    const { name, email, date, location, bio, favourites} = user

    return(
        <Fragment>
            {userData? <Fragment>
                <h1 className="large text-center p-1"> My Dashboard</h1>
                <div className="dashboard-grid">
                    <div className="my-profile bg-light">
                        <p className="lead"> <span className="text-primary-blue">Hallo!</span> {name} </p>
                        <p className="large"><i className="fas fa-user"></i></p>
                        {location? <p> Location: {location} </p>  : <p> *Tell us about your location</p>} 
                        <p> {email}</p>
                        <p> Member since: {date}</p>
                        <p><i className="fas fa-crown"></i> Beginner </p>
                        <div className="buttons"> 
                            <Link to="/edit-profile"><p className="btn btn-primary"><i className="fas fa-edit"></i> Edit </p></Link>
                        </div>
                     </div>
                <div className="my-collections bg-light">
                      <p className="lead text-center"> My Collections </p>
                       
                            {favourites?  <ul>
                                {favourites.map(e=>(
                                     <li> <Link to={`/collections/${e.themeId}`}><span className="flex-1 bold py-1 bold">{e.themeName}</span> </Link>
                                    <span className="text-primary-red show-on-hover"> <i className="link-red fas fa-times"></i></span>
                                    </li>
                                ))}</ul> : null}
                         
    
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
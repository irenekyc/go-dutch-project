import React, { Fragment, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { updateUser} from '../../actions/profile'

const ProfileForm = ()=>{
    const dispatch = useDispatch()
    const userData = useSelector(state => state.User.user)

    const profileData = useSelector(state=> state.User.user)

    const [newProfile, setnewProfile]=useState(false)

    if (profileData == null){
        setnewProfile(true)
    }
    const [profile, setProfile]= useState({
        id: userData._id,
        name:userData.name,
        email:userData.email,
        location:profileData.location || null,
        bio:profileData.bio || null,
    
    })
    const { id, name, email,  location, bio} = profile
   
 
        
    const onChangeHandler = (e)=>{
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        dispatch((updateUser(id, name, email, location, bio)))
   
    }
    

    return(
        <Fragment>
              <h1 className="large"> Edit My Profile</h1>
            <form className="form" onSubmit={e=> onSubmitHandler(e)}>
              <Fragment> 
                <div className="form-group">
                <input type="text" placeholder="Name" name="name" value={name} onChange={e=> onChangeHandler(e)} />
            </div>
            <div className="form-group">
                <input type="email" placeholder="email" name="emaiil" value={email} onChange={e=> onChangeHandler(e)}/>
            </div>

            <div className="form-group">
                <input type="text" placeholder="Location" name="location" value={location} onChange={e=> onChangeHandler(e)}/>
            </div>
     
            <div className="form-group">
                <input type="text" placeholder="Bio" name="bio" value={bio} onChange={e=> onChangeHandler(e)}/>
                <small className="py-1"> *Tell us a little about you</small>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-primary-red" value="Submit"/>
            </div>
       
            </Fragment>
            </form>
        </Fragment>
    )

}

export default ProfileForm
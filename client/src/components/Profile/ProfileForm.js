import React, { Fragment, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

const ProfileForm = ()=>{
    const dispatch = useDispatch()
    const userData = useSelector(state => state.User.user)
    const profileData = useSelector(state=> state.User.profile)
    console.log('userData')
    console.log(userData.name)
    console.log(userData.email)
    console.log('profileData')
    console.log(profileData)


    const [dataReady, setDataReady]=useState(false)
    const [profile, setProfile]= useState({
        name: " ",
        email: " ",
        passowrd: " ",
        location: " ",
        bio:" ",
        newPassword1:"",
        newPassword2:""
    })
    
    
    if (!dataReady){
        setDataReady(true)
        setProfile({
            ...profileData,
            name: userData.name,
            email: userData.email,
            passowrd: userData.password,

        })
        if (profileData){
            return setProfile({
                ...profile,
                location: profileData.location,
                bio: profileData.bio,
            })
        }
       
    }
    const { name, email, password, location, bio, newPassword1, newPassword2} = profile

    const onChangeHandler = (e)=>{
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        if(newPassword1 !== newPassword2){
            return console.log('password does not match')
        }
        console.log(profile)
    }
    

    return(
        <Fragment>
              <h1 className="large"> Edit My Profile</h1>
            <form className="form" onSubmit={e=> onSubmitHandler(e)}>
            {dataReady? <Fragment> 
                <div className="form-group">
                <input type="text" placeholder="Name" name="name" value={name} onChange={e=> onChangeHandler(e)} />
            </div>
            <div className="form-group">
                <input type="email" placeholder="email" name="emaiil" value={email} onChange={e=> onChangeHandler(e)}/>
            </div>
            <div className="form-group">
                <input type="password" placeholder="password" disabled="disable" name="password" value={password} />
                
            </div>
            <div className="form-group">
                <input type="checkbox" className="hidden" id="changePW" />
                <label for="changePW" className="btn"> Change my password </label>
                <div className="show-on-clicked bg-light my-1">
                    <input type="password" placeholder="New Password" className="my-1" name="newPassword1" value={newPassword1} onChange={e=> onChangeHandler(e)} />
                    <input type="password" placeholder="Confirm new password" className=" my-1" name="newPassword2" value={newPassword2} onChange={e=> onChangeHandler(e)}/>
                </div>
                
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
       
            </Fragment> : null}
            </form>
        </Fragment>
    )

}

export default ProfileForm
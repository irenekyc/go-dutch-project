import React, { Fragment } from 'react'

const ProfileForm = ()=>{
    return(
        <Fragment>
              <h1 className="large"> Edit My Profile</h1>
            <form action="dashboard.html" className="form">

            <div className="form-group">
                <input type="text" placeholder="Name" value="Irene" />
            </div>
            <div className="form-group">
                <input type="email" placeholder="email" value="testing@testing.com" />
            </div>
            <div className="form-group">
                <input type="password" placeholder="password" disabled="disable" value="12345678" />
                
            </div>
            <div className="form-group">
                <input type="checkbox" className="hidden" id="changePW" />
                <label for="changePW" className="btn"> Change my password </label>
                <div className="show-on-clicked bg-light my-1">
                    <input type="password" placeholder="New Password" className="my-1" />
                    <input type="password" placeholder="Confirm new password" className=" my-1"/>
                </div>
                
            </div>

            <div className="form-group">
                <input type="text" placeholder="Location" value="Hong Kong"/>
            </div>
     
            <div className="form-group">
                <input type="text" placeholder="Bio" value="Hi This is Irene"/>
                <small className="py-1"> *Tell us a little about you</small>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-primary-red" value="Submit"/>
            </div>
        
        </form>
        </Fragment>
    )

}

export default ProfileForm
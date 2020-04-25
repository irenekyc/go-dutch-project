import React, { Fragment, useState } from 'react'
import ContentForm from './ContentForm'


const CollectionForm = ()=>{
    const [formData, setFormData ] = useState({
        collection: "",
        authRequired: false,
        contentReady: false,
    })

    const onChangeHandler = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const checkBoxHandler = ()=>{
        const curStatus = formData.authRequired
        setFormData({
            ...formData,
            authRequired: !curStatus
        })
    }


    const onSubmitHandler =(e)=>{
        e.preventDefault()
        setFormData({
            ...formData,
            contentReady: true
        })

    }

    return(
        <Fragment>
        <h1 className="large"> Add New Collection</h1>
                <form className="form" onSubmit={e=> onSubmitHandler(e)}>
            
          
            <div className="form-group">
                <input type="text" placeholder="Collection Name" value={formData.collection} name="collection" onChange={e=> onChangeHandler(e)}/>
            </div>

            <div className="form-group">
                <p> Accessibility</p>
                <small> Please indicate if login is required for this collection</small>
                <p>
                <input type="checkbox" name="authRequired" value={formData.authRequired} id="authRequired" onChange={checkBoxHandler}/>
                <label for ="authRequired" className="btn-toggle"> toggle </label></p>
        
            </div>
           <input type="submit" className="btn btn-primary-blue" value="Next" />
           </form>
           
           {formData.contentReady? <ContentForm /> : null}
            
        </Fragment>
    )

}

export default CollectionForm
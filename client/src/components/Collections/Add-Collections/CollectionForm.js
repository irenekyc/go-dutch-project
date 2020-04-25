import React, { Fragment, useState } from 'react'
import ContentForm from './ContentForm'
import axios from 'axios'


const CollectionForm = ()=>{
    const [formData, setFormData ] = useState({
        name: "",
        authRequired: false,
        contentReady: false,
        collectionId: null
    })

    const {name, authRequired } = formData

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
        submitData(name, authRequired)
    }

    const submitData = async ()=>{
        try{
            const config = {
                headers:{
                    "Content-Type" : "application/JSON"
                }
            }
            const res = await axios.post('/api/collections/createCollections/', { name, authRequired}, config)
        
            setFormData({
                ...formData,
                contentReady: true,
                collectionId: res.data._id
            })

        }
        catch(err){
            console.log(err)
        }
        
    }

    return(
        <Fragment>
        <h1 className="large"> Add New Collection</h1>
                <form className="form" onSubmit={e=> onSubmitHandler(e)}>
            
          
            <div className="form-group">
                <input type="text" placeholder="Collection Name" value={name} name="name" onChange={e=> onChangeHandler(e)}/>
            </div>

            <div className="form-group">
                <p> Accessibility</p>
                <small> Please indicate if login is required for this collection</small>
                <p>
                <input type="checkbox" name="authRequired" value={authRequired} id="authRequired" onChange={checkBoxHandler}/>
                <label for ="authRequired" className="btn-toggle"> toggle </label></p>
        
            </div>
           <input type="submit" className="btn btn-primary-blue" value="Next" />
           </form>
           
           {formData.contentReady? <ContentForm collectionId={formData.collectionId}/> : null}
            
        </Fragment>
    )

}

export default CollectionForm
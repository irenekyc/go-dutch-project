import React, { Fragment, useState } from 'react'
import axios from 'axios'

const ContentForm = props =>{
 
    let counting = 0
    const [contentData, setContentData] = useState({
        dutch: "",
        en: "",
        count: 0
    })
    const {dutch, en} = contentData

    const onChangeHandler = (e)=>{
        setContentData({
            ...contentData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = ()=>{
        counting++

        setContentData({
            dutch: " ",
            en: "",
            count: counting
        })
        submitData(dutch, en)
        
    }

    const submitData = async (dutch, en)=>{

        const config ={
            headers:{
                "Content-Type": "Application/JSON"
            }
        }
        try{
            const res= await axios.post(`/api/collections/createContent/${props.collectionId}`, {dutch,en}, config)
     
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <Fragment>
            <h1 className="lead my-4"> Content</h1>
            <p className="lead"> Please insert 10 pairs </p>

            <div className="form-group flex-group">
                <input type="text" placeholder="Dutch" name="dutch" value={contentData.dutch} onChange={e=>{onChangeHandler(e)}}/>
                <input type="text" placeholder="English" name="en" value={contentData.en} onChange={e=>{onChangeHandler(e)}}/>
                <button onClick={ submitHandler}> Next </button>
            </div>
        </Fragment>
    )
}

export default ContentForm
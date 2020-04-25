import React, { Fragment, useState } from 'react'

const ContentForm =()=>{
    const [contentData, setContentData] = useState({
        dutch: null,
        en: null
    })

    const onChangeHandler = (e)=>{
        setContentData({
            ...contentData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = ()=>{

        console.log(contentData)
        setContentData({
            dutch: " ",
            en: ""
        })
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
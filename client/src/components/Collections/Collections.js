import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import CollectionCard from './CollectionCard'

const Collections = ()=>{

    const [data, setData]= useState({
        collections: [],
        dataReady: false
    })

    useEffect(()=>{
        loadData()
    }, [])

    const { collections , dataReady } = data

    const loadData = async ()=>{
        const res = await axios.get('api/collections/')

        setData({
            collections: res.data,
            dataReady: true
        })
    }

    return(
         <Fragment>
    
               <h1 className="large text-primary-blue"> Collections </h1>
              <p className="lead"> <i className="fas fa-book-open"></i> Start your learning journey </p>

              {dataReady? <Fragment>  
                  <div className="collections">
                    {collections.map(collection => <CollectionCard key={collection._id} data={collection} />)}
                 </div>

                     </Fragment> : null}
           
   
         </Fragment>

    )
}

export default Collections
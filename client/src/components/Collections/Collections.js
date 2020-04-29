import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import CollectionCard from './CollectionCard'
import { useSelector, useDispatch} from 'react-redux'
import {Link, Redirect } from 'react-router-dom'
import {getUser} from '../../actions/profile'
import { addCollection } from '../../actions/collection'
import { setAlert} from '../../actions/alert'



const Collections = ()=>{
    const isLoggedIn = useSelector(state=> state.Auth.isAuthenticated)
    const userData = useSelector(state=> state.User.user)
    const dispatch = useDispatch()
    const [data, setData]= useState({
        collections: [],
        dataReady: false
    })

    useEffect(()=>{
        loadData()
        dispatch((getUser()))
    }, [])

    const { collections , dataReady } = data

    const addFavouriteHandler = (e)=>{
        if(!isLoggedIn){
            dispatch(setAlert('Please login'))
            
        } else if(userData._id){
            dispatch(addCollection(e.target.id, userData._id))
        }
        
        
      
    }

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
                    {collections.map(collection => <CollectionCard addFavourite={e=>addFavouriteHandler(e)} key={collection._id} data={collection} />)}
                 </div>

                     </Fragment> : null}
           
   
         </Fragment>

    )
}

export default Collections
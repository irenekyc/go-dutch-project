import React, {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import ContentCard from './ContentCard'
import axios from 'axios'


const Collection = ( {match})=>{
    useEffect(()=>{
        loadData()
    }, [])
    
    const [collection, setCollection] = useState("")
    const [card, setCard] = useState(null)

    const [cardReady, setCardReady]= useState(false)
    
  
    const loadData = async ()=>{
        try{
            const res = await axios.get(`/api/collections/${match.params.id}`)
            const rawContent = await res.data.content
            setCollection(res.data.name)
            setCard(rawContent)
            setCardReady(true)
          
        } catch(err){
            console.log(err)

        }

    }


    return(
        <Fragment>
        <Link to="/collections"> <p className="btn my-1"> Back to all collections </p></Link>
        {cardReady? <Fragment>
            <h1 className="large text-primary-blue"> {collection}</h1>
         
             <ContentCard cardData = {card}/> 
        
             
             </Fragment>: null}
        </Fragment>
    )
}

export default Collection
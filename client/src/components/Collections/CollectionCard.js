import React from 'react'
import { Link } from 'react-router-dom'

const CollectionCard = ( {data: {name, _id} })=>{

    return(
        <div className="collection bg-light">
         <span><i className="fas fa-book"></i> 
             <Link to={`collections/${_id}`}> 
             <span className="link-primary"> <strong>{name}</strong></span></Link> 
        </span> 
        <p className="small link-blue" href="login.html"> <i className="fas fa-plus"></i> Add to my collections </p>
    </div>
    )

}

export default CollectionCard


    
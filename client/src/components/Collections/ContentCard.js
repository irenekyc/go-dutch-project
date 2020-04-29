import React, { useState, Fragment} from 'react'


const ContentCard = (props) =>{

    const totalLength = props.cardData.length
    const [curCard , setCurCard ] = useState({
        index: 0,
        dutch: props.cardData[0].dutch,
        en: props.cardData[0].en
    })

    const {index, dutch, en} =  curCard

    const clickHandler = (e)=>{
        const i = parseInt(e.target.id,0)
        if (i < 0){
            return
        } 
        if( i>totalLength){
            return
        }
        setCurCard({
            ...curCard,
         
        })
        changeData(i)
    }

    const changeData = (i)=>{
        setCurCard({
            index:i,
            dutch: props.cardData[i].dutch,
            en:props.cardData[i].en,
       
        })
    }


    return(
        <Fragment>
             <div className="content-card bg-light">
        <div>
            {!index <= 0 && <i className="lead link-blue fas fa-arrow-left" name="prev" id={index-1} onClick={e=> clickHandler(e)}></i>}
          
        </div>
        <div className="main-content" id={index}>
        <p className="large text-primary-blue"> <i className="far fa-comments"></i> {dutch}</p>
        <p> {en}</p>
        </div>
        <div>
            {index+1 !== totalLength && <i className="lead link-blue fas fa-arrow-right" name="next" id={index+1} onClick={e=> clickHandler(e)} ></i>}
        
        </div>
        </div>
        <p className="lead my-4 text-center"><strong> {index+1} / {totalLength} </strong> </p>
        </Fragment>
    )

}

export default ContentCard
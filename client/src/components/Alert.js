import React from 'react'
import { useSelector } from 'react-redux'



const Alert = ()=>{
    const alert = useSelector(state=> state.Alert)

    return alert.map(e=> (<div key={e.id} className={`alert`}> {e.msg} </div>))
}

export default Alert
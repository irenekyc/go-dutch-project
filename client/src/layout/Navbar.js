import React from 'react'
import {Link } from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav className="navbar bg-white">
        <Link to='/'><h1> <i className="far fa-comment-dots"></i> Go-Dutch</h1></Link>
        <ul>
            <li> <Link to="/collections"> Start Learning </Link></li>
            <li> <Link to="/register">Register </Link></li>
            <li> <Link to="/login">Login </Link></li>
            <li> <Link to="/dashboard"> My Profile </Link></li>
        </ul>
        </nav>
    )


}

export default Navbar
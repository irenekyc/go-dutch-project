import React from 'react'
import {Link } from 'react-router-dom'
import {useSelector} from 'react-redux'


const Navbar = ()=>{

    const isAuth = useSelector(state => state.Auth.isAuthenticated)


    const AuthLinks = (
        <ul>
            <li> <Link to="/collections"> Start Learning </Link></li>
            <li> <Link to="/logout"> Logout </Link> </li>
            <li> <Link to="/dashboard"> My Profile </Link></li>
        </ul>)

    const GuestLinks = (
        <ul>
            <li> <Link to="/collections"> Start Learning </Link></li>
            <li> <Link to="/register">Register </Link></li>
            <li> <Link to="/login">Login </Link></li>
        </ul>
    )


    return(
        <nav className="navbar bg-white">
        <Link to='/'><h1> <i className="far fa-comment-dots"></i> Go-Dutch</h1></Link>
        
            {isAuth? AuthLinks: GuestLinks}
     
        </nav>
    )


}

export default Navbar
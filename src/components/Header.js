import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    return(
        <div className="navbar-flex">
            <nav className="navbar-flex-options">
                <ul>
                    <li><Link to = {'/'}><p>Home</p></Link></li>
                    <li><Link to = {'/product/create'}><p>Create Product</p></Link></li>
                </ul>
            </nav>
            <nav className="navbar-flex-options">
                <ul>
                    <li><p>Options User</p></li>
                    <li><p>Login/logout</p></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">G4rutti'shop</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <Link to={"/"}><li><a>Home</a></li></Link>
                    <Link to={"/cart"}><li><a>Cart</a></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header
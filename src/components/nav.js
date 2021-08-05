import React from 'react'
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <h1 className="title">Blackjack</h1>
            <div className="nav">
                <nav>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                    <NavLink to="/games">
                        Games
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Nav;

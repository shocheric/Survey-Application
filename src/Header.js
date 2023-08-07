import logo from "./lapel_shield.png";
import React from 'react';


const Header = () => {

    return (
        <header className="Header">
            <div className="container">
                <div className="row">
                    <img src={logo} alt="Logo" className="img"></img>
                    <div className="header-text col">
                        <h1>SEA Laboratory</h1>
                        <h2>Case Severity Study</h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

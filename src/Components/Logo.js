import React from 'react';
import logo from './Assets/logo.png';

function Logo() {
    return (
        <div className="title-logo">
                <h1 className="title">Popcorn Flicks</h1>
                <img className="logo" src={logo}></img>
            </div>
    )
}

export default Logo;
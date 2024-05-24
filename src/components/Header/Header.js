import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
            <a href="/Home">Home</a>
            <a href="/Daily">Daily Update</a>
            <a href="/About">About</a>
            <a href="/FAQ">FAQ</a>
            </div>
        </div>
    );
};

export default Header;
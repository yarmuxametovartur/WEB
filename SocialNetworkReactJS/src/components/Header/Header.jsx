import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" alt="LOGO" />
        </div>
    );
}

export default Header;
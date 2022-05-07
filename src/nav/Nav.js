import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href='' className={style.general}>Main</a>
            <a href='' className={style.general}>Skills</a>
            <a href='' className={style.general}>Projects</a>
            <a href='' className={style.general}>Contact</a>
        
        </div>
    );
};

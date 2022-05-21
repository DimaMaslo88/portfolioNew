import React from 'react';
import style from './Nav.module.scss'
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink to={'/main'} className={style.general}>Main</NavLink>
            <NavLink to={'/skills'} className={style.general}>Skills</NavLink>
            <NavLink to={'/myWork'} className={style.general}>Projects</NavLink>
            <NavLink to={'/contacts'} className={style.general}>Contacts</NavLink>

        </div>
    );
};

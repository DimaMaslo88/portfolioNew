import React from 'react';
import style from './Nav.module.scss'

import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Main</Link>
            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Skills</Link>
            <Link
                activeClass={style.active}
                to="myWork"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Projects</Link>
            {/*<a href='/main' >Main</a>*/}
            {/*<a href='#skills' >Skills</a>*/}
            {/*<a href='#myWork'>Projects</a>*/}
            {/*<a href='#contacts' className={style.general}>Contacts</a>*/}
            <Link
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Contacts</Link>

        </div>
    );
};

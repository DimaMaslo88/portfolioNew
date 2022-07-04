import React, {useState} from 'react';
import style from './CombinedNav.module.scss'

import {Link, animateScroll as scroll} from "react-scroll";

export const CombinedNav = () => {
    const [active,setActive]=useState(false)
    const changeMenuHandler=()=>{
        setActive(!active)
    }
    return (
        <div className={style.combinedNav}>
            <div className={active?`${style.combinedNavItem} ${style.show}`:style.combinedNavItem}>
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
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Contacts</Link>
            </div>

                <button className={style.button} onClick={changeMenuHandler}>+</button>

        </div>

    );
};

import React from 'react';
import style from './Main_Content.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import me from "../images/new.jpg"

export const MainContent = () => {
    return (

        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.presentation}>

                    <span className={style.span}>Hi Friends</span>
                    <h2 className={style.h2}>{"I`m Dmitry Maslo"}</h2>
                    <p className={style.p}>React/Redux Frontend developer</p>


                </div>

                <div >
                    <img src={me} className={style.ava}/>
                </div>
            </div>

        </div>
    );
};


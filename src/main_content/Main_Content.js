import React from 'react';
import style from './Main_Content.module.css'
import styleContainer from '../common/styles/Container.module.css'
export const MainContent = () => {
    return (

        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.presentation}>

                <span>Hi Friends</span>
                <h1>I`m Dmitry Maslo</h1>
                <p>React/Redux Frontend developer</p>


            </div>

                <div className={style.foto}></div>
            </div>

        </div>
    );
};


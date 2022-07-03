import React from 'react';
import style from './Main_Content.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Slide from 'react-reveal/Slide';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
export const MainContent = () => {
    return (

        <div className={style.mainBlock}>


            <div className={styleContainer.container}>
                <Slide left>
                <div className={style.presentation}>

                    <span className={style.span}>Hi Friends</span>
                    <h2 className={style.h2}>{"I`m Dmitry Maslo"}</h2>
                   {/*<p className={style.p}>React/Redux Frontend developer</p>*/}
                    <ReactTypingEffect

                        text={'React/Redux Frontend developer'}
                    />

                </div>
                </Slide>
                <Slide right>
                    <Tilt className="Tilt" options={{ max : 25 }}  >
                        <div className={style.foto}>
                            <div className={style.ava}>
                            </div>

                        </div>
                    </Tilt>

                </Slide>
            </div>

        </div>
    );
};


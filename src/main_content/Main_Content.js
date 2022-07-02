import React from 'react';
import style from './Main_Content.module.scss'
import styleContainer from '../common/styles/Container.module.css'
// import {Parallax,Background} from "react-parallax/@types/index";
import Slide from 'react-reveal/Slide';

export const MainContent = () => {
    return (

        <div className={style.mainBlock}>
            {/*<Parallax strength={300}>*/}
            {/*    <Background className="custom-bg">*/}
            {/*        <img src="http://www.fillmurray.com/500/320" alt="fill murray" />*/}
            {/*    </Background>*/}
            {/*</Parallax>*/}

            <div className={styleContainer.container}>
                <Slide left>
                <div className={style.presentation}>

                    <span className={style.span}>Hi Friends</span>
                    <h2 className={style.h2}>{"I`m Dmitry Maslo"}</h2>
                    <p className={style.p}>React/Redux Frontend developer</p>


                </div>
                </Slide>
                <Slide right>
                <div className={style.foto}>
                    <div className={style.ava}>
                    </div>

                </div>
                </Slide>
            </div>

        </div>
    );
};


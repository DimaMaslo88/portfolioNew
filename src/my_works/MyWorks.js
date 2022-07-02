import React from 'react';
import style from './MyWorks.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {MyWork} from "./my_work/MyWork";
import imageSocial from '../images/sotial.jpg'
import imageTodolist from '../images/to-do-list-apps.png'
import {Title} from "../common/components/title/Title";
import Slide from 'react-reveal/Slide';
export const MyWorks = () => {
    const social={
        backgroundImage: `url(${imageSocial})`
    };
    const todolist={
        backgroundImage: `url(${imageTodolist})`
    }




    return (
        <div className={style.header}>
            <Slide left>
            <div className={`${style.MyWorkContainer} ${styleContainer.container}`}>
           <Title title="My Works "/>
                <div className={style.myWorks}>
                    <MyWork title={'Social Network'}
                            description={'social network written with react/redux'}
                            style={social}
                    />
                    <MyWork title={'Todolist'}
                            description={'educational project in IT-inkubator'}
                            style={todolist}
                    />



                </div>
            </div>
            </Slide>
        </div>
    );
};


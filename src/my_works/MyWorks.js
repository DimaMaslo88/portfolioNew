import React from 'react';
import style from './MyWorks.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {MyWork} from "./my_work/MyWork";
import imageSocial from '../images/sotial.jpg'
import imageTodolist from '../images/to-do-list-apps.png'
import imageLearnCards from '../images/learnCard.jpg'
import {Title} from "../common/components/title/Title";
import Slide from 'react-reveal/Slide';

export const MyWorks = () => {
    const social = {
        backgroundImage: `url(${imageSocial})`
    };
    const todolist = {
        backgroundImage: `url(${imageTodolist})`
    }

    const trainingCards = {
        backgroundImage: `url(${imageLearnCards})`
    }


    return (
        <div id='myWork' className={style.header}>
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
                        <MyWork title={'LearnCards'}
                                description={'educational/group project in IT-inkubator'}
                                style={trainingCards}
                                route='https://DimaMaslo88.github.io/learn_cards'/>



                    </div>
                </div>
            </Slide>
        </div>
    );
};


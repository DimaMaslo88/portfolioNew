import React from 'react';
import style from './MyWorks.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {MyWork} from "./my_work/MyWork";
import imageSocial from '../images/sotial.jpg'
import imageTodolist from '../images/to-do-list-apps.png'
import imageLearnCards from '../images/learnCard.jpg'
import imageHacker from '../images/hackerNews.jpg'
import {Title} from "../common/components/title/Title";
import Slide from 'react-reveal/Slide';

export const MyWorks = () => {
    const searchPost={
        backgroundImage:`url(${imageHacker})`
    }
    const testTask={
        backgroundImage:`url(${imageHacker})`
    }
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
                        <MyWork title={'Post Search Page'}
                                description={'Job placement tests with Rest-API,React,Redux,SCSS '}
                                style={testTask}
                                route = 'https://dimamaslo88.github.io/test-sector-bisneca/'

                        />
                        <MyWork title={'Hacker News '}
                                description={'Job placement tests with Rest-API,React,Redux '}
                                style={testTask}
                                route = 'https://dimamaslo88.github.io/test_Hacker_News_Project/'

                        />
                        <MyWork title={'Social Network'}
                                description={'social network written with react/redux'}
                                style={social}

                        />
                        <MyWork title={'Todolist'}
                                description={'educational project in IT-inkubator'}
                                style={todolist}
                                route='https://DimaMaslo88.github.io/todolist'
                        />
                        <MyWork title={'LearnCards'}
                                description={'educational/group project in IT-inkubator'}
                                style={trainingCards}
                                route='https://DimaMaslo88.github.io/learn_cards'
                        />



                    </div>
                </div>
            </Slide>
        </div>
    );
};


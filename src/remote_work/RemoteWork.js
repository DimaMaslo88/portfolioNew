import React from 'react';
import style from './RemoteWork.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const RemoteWork = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
            <Title title={'Looking into remote work options'}/>
            <button className={style.button} >Hire me</button>
            </div>
        </div>
    );
};


import React from 'react';
import style from './RemoteWork.module.css'
import styleContainer from '../common/styles/Container.module.css'
export const RemoteWork = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
            <h2>{'Looking into remote work options'}</h2>
            <button className={style.button} >Hire me</button>
            </div>
        </div>
    );
};


import React from 'react';
import style from './RemoteWork.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import Button from "../common/components/button/Button";

export const RemoteWork = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
            <Title title={'Looking into remote work options'}/>
            <Button title={'Hire me'}/>
            </div>
        </div>
    );
};


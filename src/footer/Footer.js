import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Block} from "./block/Block";

export const Footer = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Maslo Dmitry</h2>
                <div className={style.footer}>
                    <Block title={'1'}/>
                    <Block title={'2'}/>
                    <Block title={'3'}/>
                    <Block title={'4'}/>
                </div>
                <h3>   © 2022 all rights reserved</h3>
            </div>
            
        </div>
    );
};


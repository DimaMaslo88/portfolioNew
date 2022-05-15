import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Block} from "./block/Block";
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                < Title title={"Maslo Dmitry"}/>
                <div className={style.footer}>
                    <Block title={'1'}/>
                    <Block title={'2'}/>
                    <Block title={'3'}/>
                    <Block title={'4'}/>
                </div>
                <h3 className={style.ending}>   © 2022 all rights reserved</h3>
            </div>
            
        </div>
    );
};


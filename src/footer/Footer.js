import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Block} from "./block/Block";
import {Title} from "../common/components/title/Title";


import {faAt} from "@fortawesome/free-solid-svg-icons/faAt";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faViber} from "@fortawesome/free-brands-svg-icons/faViber";

export const Footer = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                < Title title={"Maslo Dmitry"}/>
                <div className={style.footer}>
                    <Block icon={faAt}/>
                    <Block icon={faTelegram}/>
                    <Block icon={faInstagram} />
                    <Block icon={faViber}/>
                </div>
                <h3 className={style.ending}>   © 2022 all rights reserved</h3>
            </div>
            
        </div>
    );
};


import React from 'react';
import style from './Contacts.module.scss'
import {Contact} from "./contact/Contact";
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title title={"Contacts"}/>
                <Contact/>

            </div>
        </div>
    );
};


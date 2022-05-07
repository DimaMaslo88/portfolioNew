import React from 'react';
import style from './Contacts.module.css'
import {Contact} from "./contact/Contact";
import styleContainer from '../common/styles/Container.module.css'
export const Contacts = () => {
    return (
        <div className={style.header}>
         <div className={`${styleContainer.container} ${style.contactContainer}`}>
             <h2 className={style.title}>Contacts</h2>
            <Contact />

         </div>
        </div>
    );
};


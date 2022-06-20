import React from 'react';
import  style from './Block.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export const Block = (props) => {
    return (
        <div className={style.block}>

          <FontAwesomeIcon icon={props.icon} size="5x"  className={style.icon} a href={'www.google.com'}/>

        </div>
    );
};


import React from 'react';
import  style from './Block.module.css'
export const Block = (props) => {
    return (
        <div className={style.block}>
            {props.title}

        </div>
    );
};


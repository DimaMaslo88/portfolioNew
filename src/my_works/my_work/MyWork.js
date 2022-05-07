import React from 'react';
import style from './MyWork.module.scss'


export const MyWork = (props) => {
    return (
        <div className={style.myWork}>
            <div  style={props.style} className={style.icon}>
                <button className={style.button}>View</button>
            </div>
            <div className={style.myWorkInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>
                {props.description}
            </span>
            </div>


        </div>
    );
};


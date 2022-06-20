import React from 'react';
import style from './Button.module.scss'

const Button = (props) => {
    return (
        <div>
            <a href={''} className={style.btn}>{props.title}</a>
        </div>
    );
};


export default Button;

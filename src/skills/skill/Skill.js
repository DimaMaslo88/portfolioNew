import React from 'react';
import style from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <FontAwesomeIcon icon={props.icon} size="5x"  />

            </div>
            <h3>{props.title}
            </h3>
            <span className={style.description}>
                    {props.description}
                </span>


        </div>
    );
};


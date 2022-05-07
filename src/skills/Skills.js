import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
             <Title title="Skills"/>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           description={'In the process of studying'}
                    />
                    <Skill title={'CSS'}
                           description={'Good knowledges'}
                    />
                    <Skill title={'React'}
                           description={'Not bad knowledges'}
                    />


                </div>


            </div>

        </div>
    );
};


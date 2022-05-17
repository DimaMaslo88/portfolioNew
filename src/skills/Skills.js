import React from 'react';
import style from './Skills.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faAtom} from "@fortawesome/free-solid-svg-icons/faAtom";
import {faCss3} from "@fortawesome/free-brands-svg-icons/faCss3";


export const Skills = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title="Skills"/>
                <div className={style.skills}>


                    <Skill
                        icon={faJs}
                        title={'JS'}
                        description={'In the process of studying'}
                    />
                    <Skill
                        icon={faCss3}
                        title={'CSS'}
                           description={'Good knowledges'}
                    />
                    <Skill
                        icon={faAtom}
                        title={'React'}
                           description={'Working with React-Redux.Using Thunk.Deploy progress into GitHub Page '}
                    />


                </div>


            </div>

        </div>
    );
};


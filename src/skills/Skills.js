import React from 'react';
import style from './Skills.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faAtom} from "@fortawesome/free-solid-svg-icons/faAtom";
import {faCss3} from "@fortawesome/free-brands-svg-icons/faCss3";
import {faServer} from "@fortawesome/free-solid-svg-icons/faServer";
import {faGit} from "@fortawesome/free-brands-svg-icons/faGit";
import {faLaptop} from "@fortawesome/free-solid-svg-icons/faLaptop";
import {faHtml5} from "@fortawesome/free-brands-svg-icons/faHtml5";
import {faComputer} from "@fortawesome/free-solid-svg-icons/faComputer";
import Fade from 'react-reveal/Fade'

export const Skills = () => {
    return (
        <div className={style.header}>
            <Fade bottom>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title="Skills"/>
                <div className={style.skills}>

                    <Skill
                        icon={faJs}
                        title={'JS'}
                        description={'in the process of studying'}
                    />
                    <Skill
                        icon={faCss3}
                        title={'CSS'}
                        description={'css and cass styles'}
                    />
                    <Skill
                        icon={faAtom}
                        title={'React'}
                        description={'working with React-Redux.Deploy progress into GitHub Page '}
                    />

                    <Skill
                        icon={faServer}
                        title={'Rest-API'}
                        description={'handling server requests'}
                    />
                    <Skill
                        icon={faGit}
                        title={'GitHub'}
                        description={'ability to work with git,uploading projects...'}
                    />
                    <Skill
                        icon={faHtml5}
                        title={'HTML'}
                        description={'knowledge in HTML5 '}
                    />
                    <Skill
                        icon={faComputer}
                        title={'Thunk'}
                        description={'server requests using Thunk and ThunkCreator'}
                    />
                    <Skill
                        icon={faLaptop}
                        title={'TypeScript'}
                        description={'all projects are written in typescript'}
                    />


                </div>


            </div>
            </Fade>
        </div>
    );
};


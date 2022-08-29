import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Block} from "./block/Block";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Bounce from 'react-reveal/Bounce';

export const Footer = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Bounce bottom>
                    < psTitle title={"Maslo Dmitry"}/>
                    <div className={style.footer}>
                        <div>
                            <a href={'https://www.https://www.linkedin.com/in/dmitrij-maslo-488b6323a/'}>
                                <Block icon={faLinkedin}/>
                            </a>
                        </div>
                        <div>
                            <a href={'https://t.me/DmitrijMaslo'}>
                                <Block icon={faTelegram}/>
                            </a>
                        </div>
                        <div>
                            <a href={'https://instagram.com/dimamaslo_1988'}>
                                <Block icon={faInstagram}/>
                            </a>
                        </div>
                        <div>
                            <a href={'https://github.com/DimaMaslo88'}>
                                <Block icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                    <h3 className={style.ending}> © 2022 all rights reserved</h3>
                </Bounce>
            </div>

        </div>
    );
};


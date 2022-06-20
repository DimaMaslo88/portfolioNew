import React from 'react';
import style from './Contact.module.scss'
import Button from "../../common/components/button/Button";

export const Contact = () => {
    return (
        <div className={style.contact}>


                <form className={style.formArea}>
                    <input className={style.in1} placeholder={"Enter your name"}/>
                    <input className={style.in2} placeholder={'Enter your e-mail'}/>
                    <textarea className={style.form} placeholder={'Enter message'}/>
                    <Button title={'Send'}/>
                </form>


        </div>
    );
};


import React from 'react';
import style from './Contact.module.css'

export const Contact = () => {
    return (
        <div className={style.contact}>


                <form className={style.formArea}>
                    <input className={style.in1} placeholder={"Enter your name"}/>
                    <input className={style.in2} placeholder={'Enter your e-mail'}/>
                    <textarea className={style.form} placeholder={'Enter message'}/>
                </form>

            <button className={style.button}>Send</button>
        </div>
    );
};


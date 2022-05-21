import './App.css';
import {Header} from "./header/Header";
import {MainContent} from "./main_content/Main_Content";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./my_works/MyWorks";
import {RemoteWork} from "./remote_work/RemoteWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Route, Routes} from "react-router-dom";
import style from "./nav/Nav.module.scss";
import React from "react";


function App() {
    return (
        <div className="App">
            {/*<div>*/}
            {/*    <Routes>*/}
            {/*        <Route path='/' className={style.general} element={<MainContent/>}/>*/}
            {/*        <Route path='/skills' className={style.general} element={<Skills/>}/>*/}
            {/*        <Route path='/myWork' className={style.general} element={< MyWorks/>}/>*/}
            {/*        <Route path='/contacts' className={style.general} element={<Contacts/>}/>*/}
            {/*    </Routes>*/}

            <Header/>
            <MainContent/>
            <Skills/>
            <MyWorks/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>

            {/*</div>*/}

        </div>
    );
}

export default App;

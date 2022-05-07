
import './App.css';
import {Header} from "./header/Header";
import {MainContent} from "./main_content/Main_Content";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./my_works/MyWorks";
import {RemoteWork} from "./remote_work/RemoteWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <MainContent/>
            <Skills/>
            <MyWorks/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>


        </div>
    );
}

export default App;

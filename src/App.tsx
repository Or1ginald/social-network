import React from 'react';
import a from './App.module.css';
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/MainContent/Profile/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/MainContent/Messages/Messages";
import {postsType} from "./index";

type AppPropsType = {
    posts:postsType
}


function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className={a.appWrapper}>
                    <Navigation/>
                    <>
                        <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}/>
                        <Route path={'/messages'} render={() => <Messages/>}/>
                    </>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

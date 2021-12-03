import React from 'react';
import a from './App.module.css';
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/MainContent/Profile/Profile/Profile";
import {Route} from "react-router-dom";
import Messages from "./components/MainContent/Messages/Messages";
import {messagesPageType, stateType} from "./redux/state";
import {useSelector} from "react-redux";
import {rootReducerType} from "./redux/store";
import {initialStateType} from "./redux/reducers/profileReducer";

type AppPropsType = {
    state:stateType
}




function App() {
    const profilePage = useSelector<rootReducerType,initialStateType>((state)=>state.ProfileReducer)
    const messages = useSelector<rootReducerType,messagesPageType>((state)=>state.messagesReducer)
    return (
            <div className="App">
                <div className={a.appWrapper}>
                    <Navigation/>
                    <>
                        <Route path={'/profile'} render={() => <Profile state={profilePage}/>}/>
                        <Route path={'/messages'} render={() => <Messages state={messages}/>}/>
                    </>
                </div>
            </div>

    );
}

export default App;

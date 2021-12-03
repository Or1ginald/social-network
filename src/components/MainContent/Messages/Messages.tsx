import React from "react";
import m from "./Messages.module.css"
import {MessagesSidebar} from "./MessagesSidebar/MessagesSidebar";
import {messagesPageType} from "../../../redux/state";
import {ChatContainer} from "./Chat/ChatContainer";

type MessagesStateType = {
    state: messagesPageType
}


 function Messages(props: MessagesStateType) {
    return (
        <div className={m.wrap}>
            <MessagesSidebar messagesData={props.state.dialogs}/>
            <ChatContainer/>
        </div>
    )
}

export default Messages

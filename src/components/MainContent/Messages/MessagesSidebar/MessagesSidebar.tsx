import React from "react";
import styles from "./MessagesSidebar.module.css"
import {ChatList} from "./ChatList/ChatList";
import {Button} from "../../../Button/Button";
import {Input} from "../../../Input/Input";
import ChatIcon from "../../../../images/svg/chat.svg"

type MessagesSidebarPropsType = {
    messagesData: {
        id: string
        name: string
        lastMessage: string
        isActive: boolean
    }[]
}

export function MessagesSidebar(props: MessagesSidebarPropsType) {

    return (
        <aside className={styles.sidebar}>
            <div className={styles.wrap}>
                <header className={styles.header}>
                    <span>Your chats</span>
                    <div>
                        <Button title={"New Chat"} svgAddress={ChatIcon} onClick={()=>5}/>
                    </div>
                </header>
                <form>
                    <Input placeholder={"Search"} onChange={()=>5} value={""}/>
                </form>
            </div>
            <div className={styles.body}>
                <ChatList messageData={props.messagesData}/>
            </div>
        </aside>
    )
    }
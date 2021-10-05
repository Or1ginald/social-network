import React from "react";
import styles from "./Chat.module.css"
import send from "../../../../images/svg/send.svg"
import deleteIcon from "../../../../images/svg/delete.svg"
import {Button} from "../../../Button/Button";
import {Input} from "../../../Input/Input";


type ChatPropsType = {
    componentData: {
        id: number,
        name: string,
        message: string
    }
}

type MessagePropsType = {
    message: string
}

export const Message = (props: MessagePropsType) => {
    return <div className={styles.message}>{props.message}</div>
}

export function Chat(props: ChatPropsType) {
    return (
        <div className={styles.chat}>
            <div className={styles.chatHeader}>
                <div className={styles.chatHeaderUserInfo}>
                    <img className={styles.avatar} src="../../../../../images/man_avatar1.jpg" alt="avatar"/>
                    <div>
                        <h5 className={styles.name}>{props.componentData.name}</h5>
                        <small>Online</small>
                    </div>
                </div>
                <Button title={"Delete chat"} svgAddress={deleteIcon}/>
            </div>
            <div className={styles.chatBody}>
                <Message message={props.componentData.message}/>
                <Message message={props.componentData.message}/>
                <Message message={props.componentData.message}/>
                <Message message={props.componentData.message}/>
            </div>
            <div className={styles.chatFooter}>
                <form className={styles.form}>
                    <Input placeholder={"Write here"}/>
                    <Button title={"Send"} svgAddress={send}/>
                </form>
            </div>
        </div>
    )
}
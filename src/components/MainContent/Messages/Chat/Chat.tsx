import React from "react";
import styles from "./Chat.module.css"
import send from "../../../../images/svg/send.svg"
import deleteIcon from "../../../../images/svg/delete.svg"
import {Button} from "../../../Button/Button";
import {Input} from "../../../Input/Input";
import {ChatPropsType} from "./ChatContainer";




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
                        <h5 className={styles.name}>Andrey</h5>
                        <small>Online</small>
                    </div>
                </div>
                <Button title={"Delete chat"} svgAddress={deleteIcon} onClick={() => console.log("5")}/>
            </div>
            <div className={styles.chatBody}>
                {props.messages.map(el => {
                    return <Message message={el.message} key={el.id}/>
                })}

            </div>
            <div className={styles.chatFooter}>
                <div className={styles.form}>
                    <Input placeholder={"Write here"} onChange={props.changeInputText} value={props.newMessage}/>
                    <Button title={"Send"} svgAddress={send} onClick={props.sendMessage}/>
                </div>
            </div>
        </div>
    )
}
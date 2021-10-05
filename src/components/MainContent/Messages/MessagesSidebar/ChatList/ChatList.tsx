import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import styles from "./ChatList.module.css"

type ChatListItemPropsType = {
    imgSrc: string
    name: string
    message: string
    id: string
    isActive: boolean
    changeStatus: (id: string) => void
}

type ChatListPropsType = {
    messageData: {
        id: string,
        name: string
        message: string
        isActive: boolean
    }[]
}


export function ChatList(props: ChatListPropsType) {
    const [dialogs, setDialogs] = useState([
        {
            id: "1",
            name: "Andrey",
            message: "Давно выяснено, что при оценке дизайна",
            isActive: false,
        },
        {
            id: "2",
            name: "Ivan",
            message: "Lorem Ipsum обеспечивает более или менее стандартное заполнение шаблона",
            isActive: false,
        },
        {
            id: "3",
            name: "Alix",
            message: "Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum",
            isActive: false,
        },
        {
            id: "4",
            name: "Evgenii",
            message: "За прошедшие годы текст Lorem Ipsum получил много версий",
            isActive: false,
        },
    ])

    const changeStatus = (id: string) => {
        setDialogs(dialogs.map(el => el.id === id ? {...el, isActive: true} : {...el, isActive: false}))
    }

    return (
        <ul className={styles.listGroup}>
            {dialogs.map(e => {
                return (
                    <ChatListItem
                        key={e.id}
                        imgSrc={'../../../../../../images/man_avatar1.jpg'}
                        id={e.id}
                        name={e.name}
                        message={e.message}
                        isActive={e.isActive}
                        changeStatus={changeStatus}
                    />
                )
            })}
        </ul>
    )
}

function ChatListItem(props: ChatListItemPropsType) {
    const cutMessage = (text: string) => {
        let breakPoint = 30
        if (text.length > breakPoint) {
            return text.slice(0, breakPoint) + "..."
        } else {
            return text
        }
    }
    const liOnclickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        console.log(e.currentTarget.id)
        return props.changeStatus(e.currentTarget.id)
    }

    const liClassName = props.isActive?`${styles.li} + ${styles.active} `:styles.li

    return (
        <li className={liClassName} onClick={liOnclickHandler} id={props.id}>
            {/* + " " + styles.active*/}
            <NavLink className={styles.listItem} to={`/messages/${props.id}`}>
                <div className={styles.avatar}>
                    <img src={props.imgSrc} alt=""/>
                </div>
                <div className={styles.listItemBody}>
                    <div>
                        <span className="personName">{props.name}</span>
                        <p>{cutMessage(props.message)}</p>
                    </div>
                </div>
            </NavLink>
        </li>
    )
}
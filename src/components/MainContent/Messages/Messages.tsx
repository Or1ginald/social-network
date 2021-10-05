import React from "react";
import m from "./Messages.module.css"
import {MessagesSidebar} from "./MessagesSidebar/MessagesSidebar";
import {Chat} from "./Chat/Chat";

 function Messages() {
    let a = [
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
    ]

    let forChatComponent = {
        id: 1,
        name: "Andrey",
        message: "Давно выяснено, что при оценке дизайна"
    }
    return (
        <div className={m.wrap}>
            <MessagesSidebar messagesData={a}/>
            <Chat componentData={forChatComponent}/>
        </div>
    )
}

export default Messages

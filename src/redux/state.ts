export type stateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
}

export type profilePageType = {
    posts: postsType
}

export type postsType = {
    id: string,
    message: string
}[]

export type messagesPageType = {
    dialogs: dialogsType
    messages: messagesType,
    newMessage: string
}

type dialogsType = {
    id: string
    name: string
    lastMessage: string
    isActive: boolean,
}[]

type messagesType = {
    id: string
    message: string
}[]

export const state: stateType = {
    profilePage: {
        posts: [
            {
                id: "1",
                message: `Hi, it's my new account`,
            },
            {
                id: "2",
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at culpa dignissimos
                    doloribus, ducimus eum incidunt iste maxime pariatur possimus reprehenderit, sit unde
                    voluptate. Animi consectetur inventore nesciunt perspiciatis suscipit.`,
            },
            {
                id: "3",
                message: `Is anyone here?`,
            },
        ]
    },
    messagesPage: {
        dialogs: [
            {
                id: "1",
                name: "Andrey",
                lastMessage: "Давно выяснено, что при оценке дизайна",
                isActive: false,
            },
            {
                id: "2",
                name: "Ivan",
                lastMessage: "Lorem Ipsum обеспечивает более или менее стандартное заполнение шаблона",
                isActive: false,
            },
            {
                id: "3",
                name: "Alix",
                lastMessage: "Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum",
                isActive: false,
            },
            {
                id: "4",
                name: "Evgenii",
                lastMessage: "За прошедшие годы текст Lorem Ipsum получил много версий",
                isActive: false,
            },
        ],
        messages: [
            {
                id: "1",
                message: "Вжух и ты петух"
            },
            {
                id: "2",
                message: "Я передумал"
            },
            {
                id: "3",
                message: "А нет,"
            },
            {
                id: "2",
                message: "Ты петух"
            },
        ],
        newMessage: "",
    },

}
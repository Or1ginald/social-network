import {messagesPageType} from "../state";

type changeInputStateACType = ReturnType<typeof changeInputTextAC>
type sendMessageACType = ReturnType<typeof sendMessageAC>

type mainActionType = changeInputStateACType | sendMessageACType


const initialState = {
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
                id: "4",
                message: "Ты петух"
            },
        ],
        newMessage: "",
    }

export const MessagesPageReducer=(state: messagesPageType= initialState, action: mainActionType):messagesPageType =>{
    switch (action.type) {
        case "CHANGE_INPUT_TEXT": {
            return {...state, newMessage: action.text}
        }
        case "SEND_MESSAGE": {
            const newMessage = {
                id: action.id,
                message: state.newMessage
            }
            return {...state, messages: [...state.messages, newMessage]}
        }
        default: return state
    }

}



export const changeInputTextAC = (text: string) => {
    return {
        type: "CHANGE_INPUT_TEXT",
        text,
    } as const
}

export const sendMessageAC = (id: string) => {
  return {
      type: "SEND_MESSAGE",
      id
  } as const
}



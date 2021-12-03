import {connect} from "react-redux";
import {Chat} from "./Chat";
import {Dispatch} from "redux";
import {rootReducerType} from "../../../../redux/store";
import {changeInputTextAC, sendMessageAC} from "../../../../redux/reducers/messages-page-reducer";
import {v1} from "uuid";


type mapStateToPropsType = {
    messages: {
        id: string,
        message: string
    }[],
    newMessage: string
}
type mapDispatchToPropsType = {
    changeInputText: (text: string) => void
    sendMessage: () => void
}

export type ChatPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        messages: state.messagesReducer.messages,
        newMessage: state.messagesReducer.newMessage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeInputText: (text: string) => {
            dispatch(changeInputTextAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC(v1()))
            dispatch(changeInputTextAC(""))
        }
    }
}


export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);
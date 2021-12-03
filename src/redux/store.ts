import {combineReducers, createStore} from "redux";
import {MessagesPageReducer} from "./reducers/messages-page-reducer";
import {ProfileReducer} from "./reducers/profile-reducer";


const rootReducer = combineReducers({
    messagesReducer: MessagesPageReducer,
    ProfileReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


// @ts-ignore
window.store = store

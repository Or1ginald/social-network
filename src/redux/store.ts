import {combineReducers, createStore} from "redux";
import {MessagesPageReducer} from "./reducers/messagesPageReducer";
import {ProfileReducer} from "./reducers/profileReducer";


const rootReducer = combineReducers({
    messagesReducer: MessagesPageReducer,
    ProfileReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


// @ts-ignore
window.store = store


export type initialStateType = {
    posts: postsType,
    newPostText: string
}

export type postsType = {
    id: string,
    message: string
    likesCount: number
}[]

type setNewPostTextACType = ReturnType<typeof setNewPostTextAC>
type addPostACType = ReturnType<typeof addPostAC>

type mainActionType = setNewPostTextACType | addPostACType

const initialState = {
    posts: [
        {
            id: "1",
            likesCount: 0,
            message: `Hi, it's my new account`,
        },
        {
            id: "2",
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at culpa dignissimos
                    doloribus, ducimus eum incidunt iste maxime pariatur possimus reprehenderit, sit unde
                    voluptate. Animi consectetur inventore nesciunt perspiciatis suscipit.`,
            likesCount: 1,
        },
        {
            id: "3",
            message: `Is anyone here?`,
            likesCount: 5,
        },
    ],
    newPostText: "jopa"
}



export const ProfileReducer= (state:initialStateType = initialState, action: mainActionType):initialStateType=> {
    switch (action.type) {
        case "SET_NEW_POST_TEXT": {
            return {...state, newPostText: action.text}
        }
        case "ADD_POST": {
            const newPost = {
                id: action.id,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        default: return state
    }
}

export const setNewPostTextAC = (text: string) => {
    return {
        type: "SET_NEW_POST_TEXT",
        text,
    } as const
}
export const addPostAC = (id: string) => {
    return {
        type: "ADD_POST",
        id
    } as const
}

import {PostsBlock} from "./PostsBlock";
import {connect} from "react-redux";
import {rootReducerType} from "../../../../redux/store";
import { Dispatch } from "redux";
import {addPostAC, setNewPostTextAC} from "../../../../redux/reducers/profile-reducer";
import {postsType} from "../../../../redux/state";
import { v1 } from "uuid";


export type PostsBlockPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    posts:postsType,
    newPostText: string
}
type mapDispatchToPropsType = {
    setNewPostText: (text: string)=>void
    addPost: ()=>void
}

const mapStateToProps = (state: rootReducerType): mapStateToPropsType=> {
return {
    posts: state.ProfileReducer.posts,
    newPostText: state.ProfileReducer.newPostText,
}
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setNewPostText: (text: string)=> {
            dispatch(setNewPostTextAC(text))
        },
        addPost: () => {
            debugger
            dispatch(addPostAC(v1()))
        }
    }
}


export const PostsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(PostsBlock)
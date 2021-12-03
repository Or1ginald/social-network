import React, {ChangeEvent} from 'react';
import styles from "./PostsBlock.module.css"
import {Button} from "../../../Button/Button";
import addPostIcon from "../../../../images/svg/send.svg";
import {PostItem} from "./PostItem/PostItem";

import {PostsBlockPropsType} from './PostsBlockContainer';


export const PostsBlock = (props: PostsBlockPropsType) => {
    const textareaOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setNewPostText(e.currentTarget.value)
        // dispatch(setNewPostTextAC(e.currentTarget.value))
    }
    return (
        <div className={styles.wall}>
            <div className={styles.myPosts}>
                <div><strong>My Posts</strong></div>
                <div className={styles.createPost}>
                    <textarea onChange={textareaOnChangeHandler} value={props.newPostText}/>
                    <Button title={"Add Post"} svgAddress={addPostIcon} onClick={props.addPost}/>
                </div>
                {props.posts.map(el => {
                    return <PostItem message={el.message} key={el.id}/>
                })}
            </div>
        </div>
    );
};

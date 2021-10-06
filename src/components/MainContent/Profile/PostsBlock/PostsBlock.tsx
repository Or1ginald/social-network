import React, {useState} from 'react';
import styles from "./PostsBlock.module.css"
import {Button} from "../../../Button/Button";
import addPostIcon from "../../../../images/svg/send.svg";
import {PostItem} from "./PostItem/PostItem";
import {postsType} from "../../../../index";

type PostsBlockPropsType = {
    posts:postsType
}

export const PostsBlock = (props:PostsBlockPropsType) => {

    const [posts, setPosts] = useState(props.posts);
    return (
        <div className={styles.wall}>
            <div className={styles.myPosts}>
                <div><strong>My Posts</strong></div>
                <div className={styles.createPost}>
                    <textarea/>
                    <Button title={"Add Post"} svgAddress={addPostIcon}/>
                </div>
                {posts.map(el => {
                    return <PostItem message={el.message} key={el.id}/>
                })}
            </div>
        </div>
    );
};

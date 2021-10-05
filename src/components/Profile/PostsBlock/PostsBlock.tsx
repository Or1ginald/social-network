import React, {useState} from 'react';
import styles from "./PostsBlock.module.css"
import {Button} from "../../Button/Button";
import addPostIcon from "../../../images/svg/send.svg";
import {PostItem} from "./PostItem/PostItem";

export const PostsBlock = () => {
    const initState = [
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
    ]
    const [posts, setPosts] = useState(initState);
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

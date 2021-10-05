import React from 'react';
import styles from "./PostItem.module.css"
import avatar from "../../../../images/avatar.png"

type PostItemPropsType = {
    message:string,
}

export const PostItem = (props:PostItemPropsType) => {
    return (
        <div className={styles.post}>
            <img src={avatar} alt="" className={styles.avatar}/>
            <div>{props.message}</div>
        </div>
    );

};

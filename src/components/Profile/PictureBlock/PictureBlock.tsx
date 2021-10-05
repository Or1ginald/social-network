import React from 'react';
import styles from "./PictureBlock.module.css"
import avatar from "../../../images/avatar.png";

export const PictureBlock = () => {
    return (
        <div>
            <div className={styles.sideBlock}>
                <div className={styles.profilePictureBlock}>
                    <img src={avatar} alt=""/>
                    <input type="file" className={styles.newPictureInput}/>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

import React from 'react';
import p from "../Profile/Profile.module.css";
import styles from "./ProfileInfoBlock.module.css";


export const ProfileInfoBlock = () => {
    let props = {
        name: "Ivan Ivanov",
        date: "12.12.2000",
        city: "Moscow",
        education: "RGSU",
        webSite: "www.yandex.ru"
    }
    return (
        <div className={styles.profileInfo}>
            <h2><strong>{props.name}</strong></h2>
            <div className={styles.otherInfo}>
                <div>Date of Birth: {props.date}</div>
                <div>City: {props.city}</div>
                <div>Education: {props.education}</div>
                <div>Web Site: {props.webSite}</div>
            </div>
        </div>
    );
};
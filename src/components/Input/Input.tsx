import React from 'react';
import styles from "./Input.module.css";

type InputPropsType = {
    placeholder: string
}

export const Input = (props: InputPropsType) => {
    const {placeholder} = props
    return (
        <input type="text" placeholder={placeholder} className={styles.input}/>
    );
};


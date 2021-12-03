import React, { ChangeEvent } from 'react';
import styles from "./Input.module.css";

type InputPropsType = {
    placeholder: string
    onChange: (text: string)=> void
    value: string
}

export const Input = (props: InputPropsType) => {
    const {placeholder} = props
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }
    return (
        <input type="text" placeholder={placeholder} className={styles.input} onChange={onChangeHandler} value={props.value}/>
    );
};


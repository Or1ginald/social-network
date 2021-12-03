import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from "./Button.module.css"

type ButtonPropsType = {
    title: string
    svgAddress: string
    onClick: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        console.log("onclick work");
        props.onClick()
    }
    return (
        <Tippy arrow={false} content={props.title}>
            <button className={styles.button} onClick={onClickHandler}>
                <img src={props.svgAddress} alt=""/>
            </button>
        </Tippy>
    )
}
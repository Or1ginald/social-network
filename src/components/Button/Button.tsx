import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from "./Button.module.css"

type ButtonPropsType = {
    title: string
    svgAddress: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <Tippy arrow={false} content={props.title}>
            <button className={styles.button}>
                <img src={props.svgAddress} alt=""/>
            </button>
        </Tippy>
    )
}
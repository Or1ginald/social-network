import n from "../Navigation.module.css";
import React from "react";
import logo from "../../../images/svg/doubleArrow.svg"
import {NavLink} from "react-router-dom";

type LogoPropsType = {
    title: string
    link: string
}

function Logo(props: LogoPropsType) {
    return (
        <li className={n.logo}>
            <NavLink to={props.link} className={n.navLink}>
                <img src={logo} alt="" className=""/>
            </NavLink>
        </li>
    )
}

export default Logo
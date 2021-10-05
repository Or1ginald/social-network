import React from "react";
import n from "./Navigation.module.css"
import NavElement from "./NavItems/NavElement";

function Navigation() {
    return (
        <nav className={n.navbar}>
            <ul className={n.navbarNav}>
                <NavElement title={"Main page"} link={"/profile"}/>
                <NavElement title={"Profile"} link={"/profile"}/>
                <NavElement title={"Messages"} link={"/messages"}/>
                <NavElement title={"News"} link={"/news"}/>
                <NavElement title={"Music"} link={"/music"}/>
                <NavElement title={"Settings"} link={"/settings"}/>
            </ul>
        </nav>)
}

export default Navigation;
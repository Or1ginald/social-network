import React from "react";
import p from "./Profile.module.css"
import {PictureBlock} from "../PictureBlock/PictureBlock";
import {ProfileInfoBlock} from "../ProfileInfoBlock/ProfileInfoBlock";
import {PostsBlock} from "../PostsBlock/PostsBlock";

function Profile() {

    return (
        <div className={p.main}>
            <PictureBlock/>
            <div className={p.rightBlock}>
                <ProfileInfoBlock/>
                <PostsBlock/>
            </div>
        </div>)
}

export default Profile;
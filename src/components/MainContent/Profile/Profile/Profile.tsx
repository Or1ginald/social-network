import React from "react";
import p from "./Profile.module.css"
import {PictureBlock} from "../PictureBlock/PictureBlock";
import {ProfileInfoBlock} from "../ProfileInfoBlock/ProfileInfoBlock";
import {PostsBlock} from "../PostsBlock/PostsBlock";
import {profilePageType} from "../../../../redux/state";
import {PostsBlockContainer} from "../PostsBlock/PostsBlockContainer";

type ProfilePropsType = {
    state:profilePageType
}

function Profile(props:ProfilePropsType) {

    return (
        <div className={p.main}>
            <PictureBlock/>
            <div className={p.rightBlock}>
                <ProfileInfoBlock/>
                <PostsBlockContainer />
            </div>
        </div>)
}

export default Profile;
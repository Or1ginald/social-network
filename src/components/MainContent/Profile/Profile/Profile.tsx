import React from "react";
import p from "./Profile.module.css"
import {PictureBlock} from "../PictureBlock/PictureBlock";
import {ProfileInfoBlock} from "../ProfileInfoBlock/ProfileInfoBlock";
import {PostsBlock} from "../PostsBlock/PostsBlock";
import {postsType} from "../../../../index";

type ProfilePropsType = {
    posts:postsType
}

function Profile(props:ProfilePropsType) {

    return (
        <div className={p.main}>
            <PictureBlock/>
            <div className={p.rightBlock}>
                <ProfileInfoBlock/>
                <PostsBlock posts={props.posts}/>
            </div>
        </div>)
}

export default Profile;
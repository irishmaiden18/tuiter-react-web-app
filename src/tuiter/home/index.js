import React from "react";
import PostList from "../post-list";
import "./index.css";
import Bibliography from "../bibliography";

const HomeComponent = () => {
    return(
        <div className="row">
            <div className="card px-0">
                <PostList/>
            </div>
            <Bibliography/>
        </div>
    );
};

export default HomeComponent;
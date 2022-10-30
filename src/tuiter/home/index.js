import React from "react";
import PostList from "../post-list";
import "./index.css";

const HomeComponent = () => {
    return(
        <div className="row">
            <div className="card px-0">
                <PostList/>
            </div>
        </div>
    );
};

export default HomeComponent;
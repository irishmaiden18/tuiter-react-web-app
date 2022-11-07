import React from "react";
import PostList from "../post-list";
import "./index.css";
import {Link} from "react-router-dom";

const HomeComponent = () => {
    return(
        <div className="row">
            <div className="card px-0">
                <PostList/>
            </div>
            <Link to="/bibliography">References</Link>
        </div>
    );
};

export default HomeComponent;
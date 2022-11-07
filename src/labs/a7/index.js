import React from "react";
import ReduxExamples from "./redux-examples";
import PostSummaryItem from "../../tuiter/post-summary-list/post-summary-item";
import {Link} from "react-router-dom";
import TuitItem from "../../tuiter/tuits/tuit-item";

const Assignment7 = () => {
    return (
        <div>
            <h1>Assignment 7</h1>
            <ReduxExamples/>
            <PostSummaryItem/>
            <TuitItem/>
            <Link to="/bibliography">References</Link>
        </div>
    );
}
export default Assignment7;
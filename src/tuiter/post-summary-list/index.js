import React from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const summaryArray = useSelector(state => state.summaryPosts)
    return(
        <ul className="list-group px-0">
            {
                summaryArray.map(summaryPost =>
                                   <PostSummaryItem
                                       key={summaryPost.userName}
                                       summaryPost={summaryPost}
                                   />
                )
            }
        </ul>
    );
};

export default PostSummaryList;
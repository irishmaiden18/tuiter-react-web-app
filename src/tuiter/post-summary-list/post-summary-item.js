import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Computer Science",
            "userName": "compsci",
            "time": "10h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "tuits": "5.5k",
            "image": "jquery.svg"
        }
    }
) => {
    return(
        <li className="list-group-item ps-3 border border-1">
            <div className="ms-0 d-flex">
                <div className="col-9 float-start ps-0 pe-3 py-3">
                    <div className="text-secondary">{post.topic}</div>
                    <div><span className="fw-bold">{post.userName}</span>&nbsp;-&nbsp;<span className="text-secondary fw-normal">{post.time}</span></div>
                    <div>{post.title}</div>
                    <div><span className="text-secondary fw-normal">{post.tweets}</span></div>
                </div>
                <div className="col-2 d-flex align-items-center mx-3">
                    <img width={100} className="float-end rounded-3" src={`/images/${post.image}`} alt="frog"/>
                </div>
            </div>
        </li>
    );
};

export default PostSummaryItem;
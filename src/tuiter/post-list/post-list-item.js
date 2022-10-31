import React from "react";

const PostListItem = (
    {
        post = {
            "author": "Elon Musk",
            "userName": "elonmusk",
            "time": "23h",
            "toptext": "Amazing show about <span class='text-primary'> @Inspiration4x </span> mission!",
            "image": "../../../images/elonSpaceShip.jpg",
            "avataricon": "../../../images/skunk.jpg",
            "bottomtitle": "Coutdown: Inspriation4 Mission to Space | Netflix Offical Site",
            "bottomtext": "space space space space space space tesla space space space ok done",
            "comments": "4.2k",
            "retweet": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="container">
                <div className="float-start mb-2 row">
                    <div className="avatar col-1 me-2"><img className="img-fluid avatarIcon"
                                                            src={`/images/${post.avataricon}`}
                                                            alt=""/></div>
                    <div className="content col-10">
                        {post.author} &nbsp; <i className="fa-solid fa-circle-check ms-1"></i> <span className="fw-bold">{post.userName}</span>
                        &nbsp;-&nbsp;<span className="text-secondary fw-normal">{post.time}</span>
                        <br/>
                        <div className="fw-bold mb-2">{post.toptext}</div>
                        <div className="text-center">
                            <img className="rounded img-fluid" src={`/images/${post.image}`}
                                 alt=""/>
                        </div>
                        <div className="fw-bold">
                            {post.bottomtitle}
                        </div>
                        <div className="text-secondary fw-normal">
                            {post.bottomtext}
                        </div>
                        <div className="icons">
                            <div>
                                <a href="#">
                                    <img src="../images/comment.svg" className="homeIcons" alt=""/>
                                    <span
                                        className="fw-normal">{post.comments}</span>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="../images/retweet.svg" className="homeIcons" alt=""/>
                                    <span
                                        className="fw-normal"> {post.retweet}</span>
                                </a>

                            </div>
                            <div>
                                <a href="#">
                                    <img src="../images/like.svg" className="homeIcons" alt=""/>
                                    <span className="fw-normal">{post.likes}</span>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="../images/upload.svg" className="homeIcons" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default PostListItem;
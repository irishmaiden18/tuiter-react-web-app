import React from "react";
import Heart from "./liked";

const TuitStats = (
    {
        tuit = {
            "_id": "123",
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.jpg",
            "liked": true,
            "replies": "123",
            "retuits": "432",
            "likes": "2345",
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return (
        <div className="row">
            <div className="icons">
                <div>
                    <a href="/">
                        <img src="../images/comment.svg" className="homeIcons" alt=""/>
                        <span className="fw-normal">{tuit.replies}</span>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <img src="../images/retweet.svg" className="homeIcons" alt=""/>
                        <span className="fw-normal"> {tuit.retuits}</span>
                    </a>

                </div>
                <div>
                    <a href="/">
                        <Heart />
                        <span className="fw-normal">{tuit.likes}</span>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <i className="bi bi-share homeIcons"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TuitStats;
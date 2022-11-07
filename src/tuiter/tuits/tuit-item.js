import React from "react";
import TuitStats from "./tuit-stats";

const TuitItem = (

    tuit = {
        "_id": 123,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
) => {
    return (
        <li className="list-group-item">
            <div className="container">
                <div className="float-start mb-2 row">
                    <div className="avatar col-1 me-2"><img className="img-fluid avatarIcon"
                                                            src={`/images/${tuit.avataricon}`}
                                                            alt=""/></div>
                    <div className="content col-10">
                        {tuit.author} &nbsp; <i className="fa-solid fa-circle-check ms-1"></i> <span className="fw-bold">{tuit.userName}</span>
                        &nbsp;-&nbsp;<span className="text-secondary fw-normal">{tuit.time}</span>
                        <br/>
                        <div className="fw-bold mb-2">{tuit.toptext}</div>
                        <div className="text-center">
                            <img className="rounded img-fluid" src={`/images/${tuit.image}`}
                                 alt=""/>
                        </div>
                        <div className="fw-bold">
                            {tuit.bottomtitle}
                        </div>
                        <div className="text-secondary fw-normal">
                            {tuit.bottomtext}
                        </div>
                        <TuitStats/>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;
import React from "react";
import TuitStats from "./tuit-stats";

const TuitItem = (
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
            "handle": "spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    console.log("hello");
    return (
        <li className="list-group-item ps-3 border border-1">
            <div className="ms-0 d-flex">
                <div className="row ps-0 pe-3 py-3">
                    <div className="col-2 mx-3">
                        <img className="rounded-circle my-2 mx-auto d-block img-fluid"
                             width={100}
                             src={`/images/${tuit.image}`}
                             alt=''/>
                    </div>
                    <div className="col-9 float-start ps-0 pe-3 py-3">
                        <div>
                            <span className="fw-bold">{tuit.userName}</span>&nbsp;
                            <i className="bi bi-check-circle-fill ms-1 text-primary"></i>
                            &nbsp;<span>{tuit.handle}</span>&nbsp;-&nbsp;
                            <span>{tuit.time}</span>
                        </div>
                        <div className="mb-2">
                            {tuit.tuit}
                        </div>
                        <TuitStats/>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;
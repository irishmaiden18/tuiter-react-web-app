import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

//invokes 'deleteTuitThunk' using remove icon embedded in each tuit
//must pass a reference, & the tuit being removed, to dispatch
const TuitItem = (
    {
        tuit = {
            "_id": "123",
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.jpg",
            "liked": false,
            "replies": "123",
            "retuits": "432",
            "likes": "2345",
            "handle": "spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (_id) => {

        //'deleteTuitThunk' invokes 'deleteTuit' 'service' &
        //'await's the response (status info from corresponding endpoint on server)
        //if status = successful => reducer passing tuit being removed is notified
                                    //then reducer creates a new state that filters out removed 'tuit'
                                    //from current state of 'tuits'
        dispatch(deleteTuitThunk(_id));//*-----this is from the assignment docs, why does my IDE
                                        // think that there should be no arguments?

    }
    return (
        <li className="list-group-item ps-3 border border-1">
            <div className="ms-0 d-flex">
                <div className="row ps-0 pe-3 py-3">
                    <div className="col-2 mx-3">
                        <img className="rounded-circle my-2 mx-auto d-block img-fluid"
                             width="{100}"
                             src={`/images/${tuit.image}`}
                             alt=''/>
                    </div>
                    <div className="col-9 float-start ps-0 pe-3 py-3">
                        <div>
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                            <span className="fw-bold">{tuit.userName}</span>&nbsp;
                            <i className="bi bi-check-circle-fill ms-1 text-primary"></i>
                            &nbsp;<span>{tuit.handle}</span>&nbsp;-&nbsp;
                            <span>{tuit.time}</span>
                        </div>
                        <div className="mb-2">
                            {tuit.tuit}
                        </div>
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;
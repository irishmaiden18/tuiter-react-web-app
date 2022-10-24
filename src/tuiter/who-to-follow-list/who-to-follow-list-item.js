import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'SpaceX', handle: 'SpaceX', avatarIcon: 'spacex.jpg' }
    }
) => {
    return(
        <li className="list-group-item align-items-center">
            <div className="row ms-0 align-items-center">

                <div className="col-1 float-start px-0 me-2">
                    <img className="rounded-circle my-2" height={48} src={`/images/${who.avatarIcon}`} alt=''/>
                </div>

                <div className="col-8 ms-4 ps-0">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>

                <div className="col-2">
                    <button type="button" className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;
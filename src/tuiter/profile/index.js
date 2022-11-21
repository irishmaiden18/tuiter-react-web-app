import React from "react";
import "./index.css";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import moment from "moment";

const ProfileComponent = (
    {
        profile = {
            "firstName": "Laura",
            "lastName": "Pohl",
            "handle": "@jannunzi",
            "profilePicture": "jose.png",
            "bannerPicture": "polyglot.png",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",
            "dateOfBirth": "7/7/1968",
            "dateJoined": "4/2009",
            "followingCount": 340,
            "followersCount": 223
        },
    }
    ) => {
    const profileInfo = useSelector(state => state.profile)
    const birthdate = profileInfo.dateOfBirth
    let json = profileInfo.dateJoined
    const [month, year] = json.split('/')
    let iyear = parseInt(year, 10)
    let imonth = parseInt(month, 10) - 1
    const joined = new Date(iyear, imonth)

    const navigate = useNavigate()
    return(
        <div className="row">
            <div>
                <div className="float-start">
                    <i className="profile-font-size bi-arrow-left"></i>
                </div>
                <div className="float-start ps-3">
                    <h5 className="fw-bold mb-0">{profileInfo.firstName}&nbsp;{profileInfo.lastName}</h5>
                    <div className="pb-2">6,114 Tweets</div>
                </div>
                <div className="pb-4 mb-5">
                    <div className="banner"><img width="100%" src={`/images/${profileInfo.bannerPicture}`} alt=''/></div>
                    <div className="ms-5 me-3">
                        <img className="rounded-circle img-fluid avatarIcon border border-3"
                             src={`/images/${profileInfo.profilePicture}`}
                             alt=''/>
                        <button className="border rounded-pill fw-bold float-end profileButton" onClick={() => navigate("/tuiter/edit-profile")}>Edit Profile</button>
                    </div>
                </div>
                <div>
                    <h5 className="fw-bold mb-0">{profileInfo.firstName}&nbsp;{profileInfo.lastName}</h5>
                    <div className="text-secondary pb-0">{profileInfo.handle}</div>
                    <div className="text-secondary">{profileInfo.website}</div>
                    <div className="pt-3">{profileInfo.bio}</div>
                    <div className="icons text-secondary">
                        <div><i className="bi bi-geo-alt"></i><span>{profileInfo.location}</span></div>
                        <div><i className="bi bi-balloon"></i><span>Born</span>&nbsp;<span className="me-3">{moment(birthdate).format("MMMM Do YYYY").toString()}</span></div>
                        <div><i className="bi bi-calendar3"></i><span>Joined</span>&nbsp;<span>{moment(joined).format("MMMM YYYY").toString()}</span></div>
                    </div>
                    <div className="followIcons">
                        <div className="pe-3"><span className="fw-bold">{profileInfo.followingCount}</span>&nbsp;<span className="text-secondary">Following</span></div>
                        <div><span className="fw-bold">{profileInfo.followersCount}</span>&nbsp;<span className="text-secondary">Followers</span></div>
                    </div>
                </div>
            </div>
            <Link to="/bibliography">References</Link>
        </div>
    )
};

export default ProfileComponent;
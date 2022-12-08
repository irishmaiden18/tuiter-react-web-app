import React, {useState} from "react";
import "./index.css";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfileComponent = (
    {
        profileIn = {
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
    const navigate = useNavigate()

    const cancelChanges = () => {
        navigate("/tuiter/profile");
    }

    let [firstNameInput, setFirstNameInput] = useState(profileInfo.firstName);
    let [lastNameInput, setLastNameInput] = useState(profileInfo.lastName);
    let [bioInput, setBioInput] = useState(profileInfo.bio);
    let [locationInput, setLocationInput] = useState(profileInfo.location);
    let [websiteInput, setWebsiteInput] = useState(profileInfo.website);
    let [dateOfBirthInput, setDateOfBirthInput] = useState(profileInfo.dateOfBirth);

    const dispatch = useDispatch();
    const profileClickHandler = () => {
        const profileChanges = {
            profile: profileIn = {
                "firstName": firstNameInput,
                "lastName": lastNameInput,
                "handle": "@jannunzi",
                "profilePicture": "jose.png",
                "bannerPicture": "polyglot.png",
                "bio": bioInput,
                "website": websiteInput,
                "location": locationInput,
                "dateOfBirth": dateOfBirthInput,
                "dateJoined": "4/2009",
                "followingCount": 340,
                "followersCount": 223
            }
        }
        dispatch(updateProfile(profileChanges));
        navigate("/tuiter/profile")
    }
    return(
        <div className="row">
            <div>
                <div className="d-flex align-items-center">
                    <i className="bi bi-x-lg mx-auto col-1 mb-2"
                       onClick={() => cancelChanges()}></i>
                    <h4 className="col-9 mb-2">Edit Profile</h4>
                    <button className="border rounded-pill fw-bold editProfileButton px-3 mb-2" onClick={profileClickHandler}>Save</button>
                </div>
                <div className="mb-3">
                    <div className="banner"><img width="100%" src={`/images/${profileInfo.bannerPicture}`} alt=''/></div>
                    <div className="ms-5 mb-5">
                        <img className="rounded-circle img-fluid editProfileAvatarIcon border border-3 mb-2"
                             src={`/images/${profileInfo.profilePicture}`}
                             alt=''/>
                    </div>
                </div>
                <div>
                    <div className="border border-2 p-1 pt-0 mb-3 rounded nameTextAreaWidth">
                        <label htmlFor="firstNameInput" className="smallText nameTextAreaWidth">First Name
                        <input type="text" id="firstNameInput" className="border-0 nameTextArea nameTextAreaWidth" value={firstNameInput} placeholder={profileInfo.firstName}
                                  onChange={(event) => setFirstNameInput(event.target.value)}>
                        </input>
                        </label>
                    </div>
                    <div className="border border-2 p-1 pt-0 mb-3 rounded nameTextAreaWidth">
                        <label htmlFor="lastNameInput" className="smallText nameTextAreaWidth">Last Name
                        <input type="text" id="lastNameInput" className="border-0 nameTextArea nameTextAreaWidth" value={lastNameInput} placeholder={profileInfo.lastName}
                               onChange={(event) => setLastNameInput(event.target.value)}>
                        </input>
                        </label>
                    </div>
                </div>
                <div className="border border-2 p-1 pt-0 mb-3 rounded nameTextAreaWidth">
                    <label htmlFor="bioInput" className="smallText nameTextAreaWidth">Bio
                        <textarea id="bioInput" className="border-0 nameTextArea nameTextAreaWidth" value={bioInput} placeholder={profileInfo.bio}
                               onChange={(event) => setBioInput(event.target.value)}>
                        </textarea>
                    </label>
                </div>
                <div className="border border-2 p-1 pt-0 mb-3 rounded nameTextAreaWidth">
                    <label htmlFor="locationInput" className="smallText nameTextAreaWidth">Location
                        <input id="locationInput" className="border-0 nameTextArea nameTextAreaWidth" value={locationInput} placeholder={profileInfo.location}
                                  onChange={(event) => setLocationInput(event.target.value)}>
                        </input>
                    </label>
                </div>
                <div className="border border-2 p-1 pt-0 mb-3 rounded nameTextAreaWidth">
                    <label htmlFor="websiteInput" className="smallText nameTextAreaWidth">Website
                        <input id="websiteInput" className="border-0 nameTextArea nameTextAreaWidth" value={websiteInput} placeholder={profileInfo.website}
                               onChange={(event) => setWebsiteInput(event.target.value)}>
                        </input>
                    </label>
                </div>
                <div className="border border-2 p-1 pt-0 mb-3 rounded nameTextAreaWidth">
                    <label htmlFor="birthdateInput" className="smallText nameTextAreaWidth">Date of Birth
                        <input type="date" id="birthdateInput" className="border-0 nameTextArea nameTextAreaWidth" value={dateOfBirthInput} placeholder={profileInfo.dateOfBirth}
                               onChange={(event) => setDateOfBirthInput(event.target.value)}>
                        </input>
                    </label>
                </div>
            </div>
            <Link to="/bibliography">References</Link>
        </div>
    );
};

export default EditProfileComponent;
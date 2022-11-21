import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import Incomplete from "./incomplete";
import ProfileComponent from "./profile";
import EditProfileComponent from "./EditProfile";

function Tuiter() {
    return (
                <div className="row mt-2">
                    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                        <NavigationSidebar/>
                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6 mb-3" style={{"position": "relative"}}>
                        <Routes>
                            <Route path="" element={<HomeComponent/>}/>
                            <Route path="home" element={<HomeComponent/>}/>
                            <Route path="explore" element={<ExploreComponent/>}/>
                            <Route path="notifications" element={<Incomplete/>}/>
                            <Route path="messages" element={<Incomplete/>}/>
                            <Route path="bookmarks" element={<Incomplete/>}/>
                            <Route path="lists" element={<Incomplete/>}/>
                            <Route path="profile" element={<ProfileComponent/>}/>
                            <Route path="edit-profile" element={<EditProfileComponent/>}/>
                            <Route path="more" element={<Incomplete/>}/>
                        </Routes>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
    );
}

export default Tuiter;
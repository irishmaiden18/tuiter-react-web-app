import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import Incomplete from "./incomplete";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";

const store = configureStore( {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6 mb-3" style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/" element={<HomeComponent/>}/>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="notifications" element={<Incomplete/>}/>
                        <Route path="messages" element={<Incomplete/>}/>
                        <Route path="bookmarks" element={<Incomplete/>}/>
                        <Route path="lists" element={<Incomplete/>}/>
                        <Route path="profile" element={<Incomplete/>}/>
                        <Route path="more" element={<Incomplete/>}/>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;
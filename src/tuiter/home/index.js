import React from "react";
import TuitsList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";
import "./index.css";
import {Link} from "react-router-dom";

const HomeComponent = () => {
    return(
        <div className="row">
            <h4 className="mx-3">Home</h4>
            <WhatsHappening/>
            <div className="card px-0">
                <TuitsList/>
            </div>
            <Link to="/bibliography">References</Link>
        </div>
    );
};

export default HomeComponent;
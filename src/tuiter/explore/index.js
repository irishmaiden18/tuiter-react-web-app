import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const ExploreComponent = () => {
    return(
            <div className="row">
                    <div className="form-group has-search list-group-item d-flex justify-content-between align-items-center mb-2">
                        <input type="text" id="search-input" className="searchbar" placeholder="Search Tuiter"/>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/>
                        <FontAwesomeIcon icon="fa-solid fa-gear" className="fa-2x me-3 text-primary"/>
                    </div>
                   <ul className="nav nav-tabs mb-2">
                            <li className="nav-item">
                                <a className="nav-link active" href="for-you.html">For you</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="trending.html">Trending</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="news.html">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="sports.html">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="entertainment.html">Entertainment</a>
                            </li>
                   </ul>
                   <div className="card px-0">
                       <div className="imageContainer">
                           <img className="card-img-top w-100" src="../images/rocket1.jpg" alt="Card"/>
                           <h1 className="imageText text-white">SpaceX Starship</h1>
                       </div>
                       <PostSummaryList/>
                   </div>
                <Link to="/bibliography">References</Link>
            </div>
    );
};

export default ExploreComponent;
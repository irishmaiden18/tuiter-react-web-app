import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

library.add(fas);

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">

            <a className={`list-group-item`}>
                <FontAwesomeIcon icon="fa-t" className={"me-2"}/>
            </a>

            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <FontAwesomeIcon icon="fa-solid fa-house-chimney" className={"me-2"}/>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <FontAwesomeIcon icon="fa-solid fa-hashtag" className={"me-2"}/>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                <FontAwesomeIcon icon="fa-solid fa-flask-vial" className={"me-2"} />
                Labs
            </Link>
            <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <FontAwesomeIcon icon="fa-solid fa-bell" className={"me-2"}/>
                Notifications
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
                <FontAwesomeIcon icon="fa-solid fa-envelope" className={"me-2"}/>
                Messages
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <FontAwesomeIcon icon="fa-solid fa-bookmark" className={"me-2"}/>
                Bookmarks
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <FontAwesomeIcon icon="fa-solid fa-list" className={"me-2"}/>
                Lists
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <FontAwesomeIcon icon="fa-solid fa-user" className={"me-2"}/>
                Profile
            </Link>
            <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}>
                <div className={`fa-stack me-2 ${active === 'more'?'d-none':''}`} style={{width: '1em'}}>
                    <FontAwesomeIcon icon="fas fa-circle" className={"ms-0 me-0 fa-stack-1x"}/>
                    <FontAwesomeIcon icon="fas fa-ellipsis-h" className={"ms-0 me-0 fa-stack-1x fa-inverse"}/>
                </div>
                <div className={`fa-stack me-2 ${active === 'more'?'':'d-none'}`} style={{width: '1em'}}>
                    <FontAwesomeIcon icon="fas fa-circle" className={"ms-0 me-0 fa-stack-1x fa-inverse"}/>
                    <FontAwesomeIcon icon="fas fa-ellipsis-h" className={"ms-0 me-0 fa-stack-1x text-primary"}/>
                </div>
                More
            </Link>
        </div>
    );
};
export default NavigationSidebar;
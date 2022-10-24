import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(fas);

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">

            <a className={`list-group-item 
                ${active === 'root'?'active':''}`} href={"/"}>
                <FontAwesomeIcon icon="fa-t" className={"me-2"}/>
            </a>

            <a className={`list-group-item
                    ${active === 'home'?'active':''}`} href={"/"}>

            <FontAwesomeIcon icon="fa-solid fa-house-chimney" className={"me-2"}/>
                Home
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`} href={"/"}>
                    <FontAwesomeIcon icon="fa-solid fa-hashtag" className={"me-2"}/>
                Explore
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href={"/"}>
                    <FontAwesomeIcon icon="fa-solid fa-bell" className={"me-2"}/>
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href={"/"}>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" className={"me-2"}/>
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href={"/"}>
                <FontAwesomeIcon icon="fa-solid fa-bookmark" className={"me-2"}/>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href={"/"}>
                <FontAwesomeIcon icon="fa-solid fa-list" className={"me-2"}/>
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href={"/"}>
                    <FontAwesomeIcon icon="fa-solid fa-user" className={"me-2"}/>
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href={"/"}>
                <div className="fa-stack me-2" style={{width: '1em'}}>
                    <FontAwesomeIcon icon="fas fa-circle" className={"ms-0 me-0 fa-stack-1x"}/>
                    <FontAwesomeIcon icon="fas fa-ellipsis-h" className={"ms-0 me-0 fa-stack-1x fa-inverse"}/>
                </div>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;
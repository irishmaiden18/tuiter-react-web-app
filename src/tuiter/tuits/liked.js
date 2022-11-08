import React from "react";

function Heart (tuit) {

    const liked = tuit.liked;

    return (
        <span>
            { liked ? <span><i className="bi bi-heart-fill homeIcons"></i></span> : <span><i className="bi bi-heart homeIcons"></i></span> }
        </span>
    );
}

export default Heart;
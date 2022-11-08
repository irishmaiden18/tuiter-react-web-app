import React from "react";
import TuitsList from "./tuits";

const Incomplete = () => {
    return (
        <div>
            <h1 className="text-center">This page is not ready yet</h1>
            <TuitsList/>
            <a href="/tuiter/home">Go Home</a>
        </div>
    );
};

export default Incomplete;
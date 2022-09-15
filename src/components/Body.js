import React from 'react';
import New from "./New/New";
import Menu from "./Menu/Menu";
import Information from "./Information/Information";
import "./../App.css"
import Reviews from "./Reviews/Reviews";

const Body = () => {
    return (
        <div className="body">
            <New/>
            <Menu/>
            <Information/>
            <Reviews/>
        </div>
    );
};

export default Body;
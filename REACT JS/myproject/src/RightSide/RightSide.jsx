import React from "react";
import './RightSide.css'
import Updates from "../Updates/Updates";
import Calendar from "../components/Calendar/Calendar";
import Weather from "../components/Weather/Weather";

const RightSide = () => {
    return(
        <div className="RightSide">
            
            <div>
                <Updates/>
            </div>
            
            <div>
                <Calendar/>
                <Weather/>
            </div>
        </div>
    )
}

export default RightSide
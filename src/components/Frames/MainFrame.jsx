import React from "react";
import Greeting from "./Greeting";
import FloorPlan from "../FloorPlan/FloorPlan";

function MainFrame() {
    return (
        <div className="frame frame--main">
            <Greeting />
            <FloorPlan />
        </div>
    );
}

export default MainFrame;

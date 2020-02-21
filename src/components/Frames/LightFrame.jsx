import React, { useState } from "react";
import Frame from "./Frame";
import FloorPlan from "../FloorPlan/FloorPlan";
import LightController from "../LightController/LightController";

function LightFrame(props) {
    const [activeRoom, setActiveRoom] = useState("House");

    return (
        <Frame>
            <FloorPlan activeRoom={activeRoom} setActiveRoom={setActiveRoom} />
            <LightController
                activeRoom={activeRoom}
                setActiveRoom={setActiveRoom}
            />
        </Frame>
    );
}

export default LightFrame;

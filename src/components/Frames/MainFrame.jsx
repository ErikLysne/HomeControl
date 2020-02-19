import React, { useState } from "react";
import styled from "styled-components";
import Frame from "./Frame";
import Greeting from "./Greeting";
import FloorPlan from "../FloorPlan/FloorPlan";
import LightController from "../LightController/LightController";

function MainFrame(props) {
    const [activeRoom, setActiveRoom] = useState("House");

    return (
        <Frame>
            <Greeting />
            <FloorPlan activeRoom={activeRoom} setActiveRoom={setActiveRoom} />
            <LightController
                activeRoom={activeRoom}
                setActiveRoom={setActiveRoom}
            />
        </Frame>
    );
}

export default MainFrame;

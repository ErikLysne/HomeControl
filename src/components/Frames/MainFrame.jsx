import React, { useState } from "react";
import styled from "styled-components";
import Frame from "./Frame";
import Greeting from "./Greeting";
import FloorPlan from "../FloorPlan/FloorPlan";
import LightController from "../LightController/LightController";

const Wrapper = styled(Frame)`
    width: 70%;
    left: 1%;
    top: 4rem;
    bottom: 175px;
    background-color: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.5);
    border-style: solid;
    border-radius: 50px;
    border-width: 4px;
`;

function MainFrame(props) {
    const [activeRoom, setActiveRoom] = useState("House");

    return (
        <Wrapper>
            <Greeting />
            <FloorPlan activeRoom={activeRoom} setActiveRoom={setActiveRoom} />
            <LightController
                activeRoom={activeRoom}
                setActiveRoom={setActiveRoom}
            />
        </Wrapper>
    );
}

export default MainFrame;

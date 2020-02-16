import React from "react";
import styled from "styled-components";
import Frame from "./Frame";
import Greeting from "./Greeting";
import FloorPlan from "../FloorPlan/FloorPlan";

const Wrapper = styled(Frame)`
    width: 70%;
    left: 1%;
    top: 8vh;
    bottom: 175px;
    background-color: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.5);
    border-style: solid;
    border-radius: 50px;
    border-width: 4px;
`;

function MainFrame(props) {
    return (
        <Wrapper>
            <Greeting />
            <FloorPlan />
        </Wrapper>
    );
}

export default MainFrame;

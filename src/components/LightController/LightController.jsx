import React from "react";
import shortid from "shortid";
import styled from "styled-components";
import Gauge from "./Gauge";

const LightControllerContainer = styled.div`
    width: 40%;
    height: 40%;
    position: absolute;
    right: 10%;
    top: 10%;
    display: flex;
    opacity: 0.5;
`;

const GaugeContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TargetLabel = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function LightController(props) {
    return (
        <LightControllerContainer>
            <TargetLabel>{"Target: " + props.activeRoom}</TargetLabel>
            <GaugeContainer>
                <Gauge key={shortid.generate()} name={"HUE"}></Gauge>
                <Gauge key={shortid.generate()} name={"SAT"}></Gauge>
                <Gauge key={shortid.generate()} name={"BRI"}></Gauge>
            </GaugeContainer>
        </LightControllerContainer>
    );
}

//

export default LightController;

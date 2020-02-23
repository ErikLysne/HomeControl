import React from "react";
import shortid from "shortid";
import styled from "styled-components";
import Gauge from "./Gauge";

const LightControllerContainer = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
`;

const GaugeContainer = styled.div`
    width: 75%;
    height: 50%;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GaugeWrapper = styled.div`
    width: 30%;
    padding-top: 30%;
    margin: auto;
    position: relative;
`;

const TargetLabel = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
`;

function LightController(props) {
    return (
        <LightControllerContainer>
            <TargetLabel>{"Target: " + props.activeRoom}</TargetLabel>
            <GaugeContainer>
                <GaugeWrapper>
                    <Gauge
                        key={shortid.generate()}
                        name={"HUE"}
                        type={"hue"}
                    ></Gauge>
                </GaugeWrapper>
                <GaugeWrapper>
                    <Gauge
                        key={shortid.generate()}
                        name={"SAT"}
                        type={"sat"}
                    ></Gauge>
                </GaugeWrapper>
                <GaugeWrapper>
                    <Gauge
                        key={shortid.generate()}
                        name={"BRI"}
                        type={"bri"}
                    ></Gauge>
                </GaugeWrapper>
            </GaugeContainer>
        </LightControllerContainer>
    );
}

//

export default LightController;

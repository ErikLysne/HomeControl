import React from "react";
import ShortId from "shortid";
import styled from "styled-components";
import LightSlider from "./LightSlider";

const Wrapper = styled.div`
    width: 50%;
    height: 30%;
    position: absolute;
    right: 0;
    top: 25%;
    display: flex;
    flex-direction: column;
`;

const TargetName = styled.div`
    width: 100%;
    height: 2rem;
    margin-left: 1rem;
    font-size: 1rem;
`;

function LightController(props) {
    return (
        <Wrapper>
            <TargetName>{"Target: " + props.activeRoom}</TargetName>
            <LightSlider key={ShortId.generate()} name={"HUE"} />
            <LightSlider key={ShortId.generate()} name={"SAT"} />
            <LightSlider key={ShortId.generate()} name={"BRI"} />
        </Wrapper>
    );
}

export default LightController;

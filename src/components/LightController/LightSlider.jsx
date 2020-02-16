import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 2rem;
    margin: auto;
    padding: 2vh 0;
    display: flex;
`;

const Text = styled.div`
    width: 10%;
    height: 100%;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
`;

const Slider = styled.input`
    width: 60%;
    height: 2vh;
    margin: auto 1rem auto auto;
    padding: 4px;
    -webkit-appearance: none;
    border-style: solid;
    border-radius: 20px;
    border-color: rgba(255, 255, 255, 0.5);
    margin: 10px;
    background: none;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        background: #c7e6ec;
        cursor: pointer;
    }
`;

function LightSlider(props) {
    return (
        <Wrapper>
            <Text>{props.name}</Text>
            <Slider type="range" min="1" max="100" />
        </Wrapper>
    );
}

export default LightSlider;

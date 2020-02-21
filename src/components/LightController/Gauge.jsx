import React, { useState } from "react";
import styled from "styled-components";
import shortid from "shortid";

const GaugeContainer = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    position: relative;
    margin: 20px;
`;

const Tick = styled.div`
    width: 10px;
    height: 4px;
    position: absolute;
    top: 50%;
    right: 50%;
    background-color: ${props =>
        props.tickCount * (props.value / 100) >= props.tickIndex
            ? "rgb(1, 173, 212)"
            : "rgb(255, 255, 255)"};
    border-radius: 10px;
    transform: translateX(50%) translateY(50%)
        rotateZ(
            ${props => 137.5 + props.tickIndex * (270 / props.tickCount)}deg
        )
        translateX(${props => props.radius}px);
    pointer-events: none;
`;

const Label = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
`;

const Value = styled(Label)`
    font-size: 0.75rem;
    padding-top: 20px;
`;

function Gauge(props) {
    const [value, setValue] = useState(50);

    const tickIndex = [];
    for (let index = 0; index < props.tickCount; index++) {
        tickIndex[index] = index;
    }

    let interval;

    function handleMouseEvent(event) {
        event.stopPropagation();
        const bounds = event.target.getBoundingClientRect();
        const x = event.clientX - bounds.left - 0.5 * bounds.width;
        const y = -event.clientY + bounds.top + 0.5 * bounds.height;

        const angle = Math.atan(y / x) + (x < 0 ? Math.PI : 0);
        const angleDeg = (angle * 180) / Math.PI;

        let newValue = Math.floor(
            angleDeg > 227.5 || angleDeg < -47.5
                ? 0
                : (100 * (227.5 - angleDeg)) / 270
        );

        newValue = newValue > 100 ? 100 : newValue;
        newValue = newValue < 0 ? 0 : newValue;

        console.log(newValue);
        setValue(newValue);
    }

    function handleMouseDown(event) {
        interval = setInterval(handleMouseEvent(event), 100);
    }

    function handleMouseUp() {
        clearInterval(interval);
    }

    return (
        <GaugeContainer
            width={props.width}
            height={props.height}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <Label>{props.name}</Label>
            <Value>{`${value}%`}</Value>
            {tickIndex.map(index => (
                <Tick
                    key={shortid.generate()}
                    value={value}
                    tickIndex={index}
                    tickCount={props.tickCount}
                    radius={props.radius}
                />
            ))}
        </GaugeContainer>
    );
}

Gauge.defaultProps = {
    width: 150,
    height: 150,
    radius: 50,
    tickCount: 25
};

export default Gauge;

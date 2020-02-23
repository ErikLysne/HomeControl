import React, { useState } from "react";
import styled from "styled-components";

const themeColor = {
    r: 37,
    g: 215,
    b: 219
};

function getThemeColor() {
    return `rgb(${themeColor.r}, ${themeColor.g}, ${themeColor.b})`;
}

const GaugeContainer = styled.div`
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0.75;
`;

const Border = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
    box-shadow: 0 1px 2px #fff, 0 -1px 1px #666,
        inset 0 -1px 1px rgba(0, 0, 0, 0.5),
        inset 0 1px 1px rgba(255, 255, 255, 0.8);
`;

const BorderColor = styled(Border)`
    width: 90%;
    height: 90%;
    background: conic-gradient(
        #ff0000 0%,
        #ffff00 17%,
        #00ff00 33%,
        #00ffff 50%,
        #0000ff 67%,
        #ff00ff 83%,
        #ff0000 100%
    );
    border: none;
`;

const BorderMask = styled(Border)`
    width: 70%;
    height: 70%;
    background-color: rgb(30, 30, 30);
`;

const BorderOuter = styled(Border)`
    width: 100%;
    height: 100%;
    background: radial-gradient(
        rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, 0) 40%,
        rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, 0.5) 80%,
        rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, 0) 90%
    );
`;

const BorderInner = styled(Border)`
    width: 55%;
    height: 55%;
    border-color: ${getThemeColor()};
`;

const ColorSelect = styled(Border)`
    width: 50%;
    height: 50%;
    background: radial-gradient(
        hsl(${props => (360 * props.value) / 100}, 100%, 50%) 0%,
        rgba(255, 255, 255, 0) 75%
    );
`;

const Tick = styled.div`
    height: 20%;
    width: 2%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%)
        rotateZ(${props => (props.index * 360) / props.count}deg)
        translateY(175%);
    background-color: rgb(30, 30, 30);
    box-shadow: 0 1px 2px #fff, 0 -1px 1px #666,
        inset 0 -1px 1px rgba(0, 0, 0, 0.5),
        inset 0 1px 1px rgba(255, 255, 255, 0.8);
`;

/*
const Tick = styled.div`
    width: 20px;
    height: 3px;
    position: absolute;
    top: 50%;
    right: 50%;
    background-color: ${props =>
        props.tickCount * (props.value / 100) >= props.tickIndex
            ? getTickColor(
                  props.value,
                  props.tickIndex,
                  props.tickCount,
                  props.type
              )
            : `rgb(200, 200, 200)`};
    transform: translateX(50%) translateY(50%)
        rotateZ(
            ${props => 137.5 + props.tickIndex * (270 / props.tickCount)}deg
        )
        translateX(${props => props.radius + 10}px);
    pointer-events: none;
`;

function getTickColor(value, tickIndex, tickCount, type) {
    switch (type) {
        case "hue":
            return `hsl(${(360 * tickIndex) / tickCount}, 100%, 50%)`;
        case "sat":
            return `hsl(220, ${(100 * tickIndex) / tickCount}%, 50%)`;
        case "bri":
            return `hsl(60, 75%, ${(100 * tickIndex) / tickCount}%)`;
    }
}
*/

const Label = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
`;

const NameLabel = styled.div`
    position: absolute;
    font-size: 1vw;
    padding-top: 1.25vw;
`;

const ValueLabel = styled.div`
    position: absolute;
    font-size: 2vw;
    padding-bottom: 1.75vw;
`;

const HorizontalLine = styled.div`
    position: absolute;
    width: 40%;
    height: 2px;
    background-color: rgb(255, 255, 255);
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
        <GaugeContainer onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <BorderColor />
            <BorderMask />
            {tickIndex.map(index => (
                <Tick index={index} count={props.tickCount} />
            ))}
            <BorderOuter />

            <BorderInner />
            <ColorSelect value={value} />
            <Label>
                <ValueLabel>{`${Math.round(3.6 * value)}`}</ValueLabel>
                <NameLabel>{props.name}</NameLabel>
                <HorizontalLine />
            </Label>
        </GaugeContainer>
    );
}

Gauge.defaultProps = {
    tickCount: 40
};

/*

{tickIndex.map(index => (
                <Tick
                    key={shortid.generate()}
                    value={value}
                    tickIndex={index}
                    tickCount={props.tickCount}
                    type={props.type}
                    radius={props.radius}
                />
            ))}


*/

export default Gauge;

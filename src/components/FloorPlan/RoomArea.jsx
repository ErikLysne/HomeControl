import React from "react";
import styled from "styled-components";
import Room from "./Room";
import RoomSvg from "./RoomSvg";

const RadialGradientWrapper = styled.svg`
    width: 0;
    height: 0;
    position: absolute;
`;

const RadialGradientStopInner = styled.stop`
    stop-color: rgba(255, 252, 176, 1);
`;

const RadialGradientStopOuter = styled.stop`
    stop-color: rgba(255, 252, 176, 0.5);
`;

function RoomAreaStyler(props) {
    return (
        <RadialGradientWrapper aria-hidden="true" focusable="false">
            <defs>
                <radialGradient id={"room-radial-gradient-" + props.index}>
                    <RadialGradientStopInner offset="0%" />
                    <RadialGradientStopOuter offset="100%" />
                </radialGradient>
            </defs>
        </RadialGradientWrapper>
    );
}

const RoomAreaPath = styled.path`
    fill: url(#room-radial-gradient-${props => props.index});
    opacity: 80%;
    pointer-events: all;

    &:hover {
        fill: #00d7bf;
        opacity: 50%;
    }
`;

function RoomArea(props) {
    let path = "M" + props.area[0][0] + "," + props.area[0][1];
    path += props.area.map(
        coordinate => "L" + coordinate[0] + "," + coordinate[1]
    );
    path += "Z";

    return (
        <Room>
            <RoomAreaStyler index={props.index} />
            <RoomSvg index={props.index} viewBox={props.viewBox}>
                <RoomAreaPath
                    index={props.index}
                    d={path}
                    onClick={() => console.log(props.name)}
                />
            </RoomSvg>
        </Room>
    );
}

export default RoomArea;

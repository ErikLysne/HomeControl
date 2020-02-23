import React from "react";
import styled from "styled-components";
import Room from "./Room";
import RoomSvg from "./RoomSvg";

// Uncomment for radial gradient styling
/*
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
*/

const RoomAreaPath = styled.path`
    pointer-events: all;
    fill: ${props =>
        props.highlight
            ? "rgba(139, 229, 244, 0.75)"
            : "rgba(255, 252, 176, 0.4)"};
`;

function RoomArea(props) {
    let path = "M" + props.area[0][0] + "," + props.area[0][1];
    path += props.area.map(
        coordinate => "L" + coordinate[0] + "," + coordinate[1]
    );
    path += "Z";

    const isActiveRoom = props.activeRoom === props.name;

    return (
        <Room>
            <RoomSvg index={props.index} viewBox={props.viewBox}>
                <RoomAreaPath
                    index={props.index}
                    d={path}
                    highlight={isActiveRoom}
                    onClick={() => props.onClick(props.name)}
                />
            </RoomSvg>
        </Room>
    );
}

export default RoomArea;

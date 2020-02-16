import React from "react";
import styled from "styled-components";
import Room from "./Room";
import RoomSvg from "./RoomSvg";

const RadialGradientWrapper = styled.svg`
    width: 0;
    height: 0;
    position: absolute;
`;

function RoomArea(props) {
    const RadialGradientStopInner = styled.stop`
        stop-color: rgba(255, 255, 255, 1);
    `;

    const RadialGradientStopOuter = styled.stop`
        stop-color: rbga(255, 255, 255, 0.1);
    `;

    function RoomAreaStyler() {
        return (
            <RadialGradientWrapper aria-hidden="true" focusable="false">
                <defs>
                    <radialGradient id={"room-radial-gradient-" + props.index}>
                        <RadialGradientStopInner offset="0%" />
                        <RadialGradientStopOuter offset="80%" />
                    </radialGradient>
                </defs>
            </RadialGradientWrapper>
        );
    }

    const RoomAreaPath = styled.path`
        fill: url(#room-radial-gradient-${props.index});
        opacity: 50%;
        pointer-events: all;

        &::hover {
            fill: green;
            opacity: 90%;
        }
    `;
    let path = "M" + props.area[0][0] + "," + props.area[0][1];
    path += props.area.map(
        coordinate => "L" + coordinate[0] + "," + coordinate[1]
    );
    path += "Z";

    return (
        <Room>
            <RoomAreaStyler index={props.index} />
            <RoomSvg index={props.index} viewBox={props.viewBox}>
                <RoomAreaPath d={path} />
            </RoomSvg>
        </Room>
    );
}

export default RoomArea;

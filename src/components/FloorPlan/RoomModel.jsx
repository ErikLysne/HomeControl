import React from "react";
import styled from "styled-components";
import Room from "./Room";
import RoomSvg from "./RoomSvg";

const RoomPath = styled.path`
    fill: none;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke: rgba(37, 215, 219, 0.5);
`;

function RoomModel(props) {
    return (
        <Room>
            <RoomSvg index={props.index} viewBox={props.viewBox}>
                <RoomPath
                    transform={
                        "translate(" +
                        props.offset.x +
                        ", " +
                        props.offset.y +
                        ")"
                    }
                    d={props.path}
                />
            </RoomSvg>
        </Room>
    );
}

export default RoomModel;

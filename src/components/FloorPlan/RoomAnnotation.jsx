import React from "react";
import RoomSvg from "./RoomSvg";

function RoomAnnotation(props) {
    const annotationPath =
        "M" +
        props.path.origin.x +
        "," +
        props.path.origin.y +
        "L" +
        props.path.elbow.x +
        "," +
        props.path.elbow.y +
        "L" +
        props.path.endpoint.x +
        "," +
        props.path.endpoint.y;

    return (
        <div className="room">
            <RoomSvg index={props.index} viewBox={props.viewBox}>
                <path className="room-annotation__path" d={annotationPath} />
                <circle
                    className="room-annotation__circle"
                    cx={props.path.origin.x}
                    cy={props.path.origin.y}
                    r="10px"
                />
                <text
                    className="room-annotation__text"
                    x={
                        props.path.elbow.x < props.path.endpoint.x
                            ? props.path.elbow.x
                            : props.path.endpoint.x
                    }
                    y={props.path.endpoint.y - 10}
                >
                    {props.name}
                </text>
            </RoomSvg>
        </div>
    );
}

export default RoomAnnotation;

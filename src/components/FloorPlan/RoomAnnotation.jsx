import React from "react";
import styled from "styled-components";
import Room from "./Room";
import RoomSvg from "./RoomSvg";

const AnnotationPath = styled.path`
    fill: none;
    stroke: rgba(255, 255, 255, 0.75);
    stroke-width: ${props => (props.highlight ? "4px" : "2px")};
`;

const AnnotationCircle = styled.circle`
    fill: rgba(255, 255, 255, 0.75);
`;

const AnnotationText = styled.text`
    fill: rgba(255, 255, 255, 0.75);
    font-size: ${props => (props.highlight ? "1.5rem" : "1.25rem")};
`;

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

    const isActiveRoom = props.activeRoom === props.name;

    return (
        <Room>
            <RoomSvg index={props.index} viewBox={props.viewBox}>
                <AnnotationPath d={annotationPath} highlight={isActiveRoom} />
                <AnnotationCircle
                    cx={props.path.origin.x}
                    cy={props.path.origin.y}
                    r={isActiveRoom ? "15px" : "10px"}
                />
                <AnnotationText
                    x={
                        props.path.elbow.x < props.path.endpoint.x
                            ? props.path.elbow.x
                            : props.path.endpoint.x
                    }
                    y={props.path.endpoint.y - 10}
                    highlight={isActiveRoom}
                >
                    {props.name.toUpperCase()}
                </AnnotationText>
            </RoomSvg>
        </Room>
    );
}

export default RoomAnnotation;

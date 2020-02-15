import React from "react";

function RoomSvg(props) {
    return (
        <svg
            width="100%"
            height="100%"
            style={{ zIndex: props.index }}
            viewBox={
                props.viewBox.minX +
                ", " +
                props.viewBox.minY +
                ", " +
                props.viewBox.width +
                ", " +
                props.viewBox.height
            }
            preserveAspectRatio="xMidYMid meet"
        >
            {props.children}
        </svg>
    );
}

export default RoomSvg;

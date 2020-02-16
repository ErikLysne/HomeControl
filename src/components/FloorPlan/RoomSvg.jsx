import React from "react";
import styled from "styled-components";

function RoomSvg(props) {
    const Wrapper = styled.svg`
        width: 100%;
        height: 100%;
        z-index: ${props.index};
    `;

    return (
        <Wrapper
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
        </Wrapper>
    );
}

export default RoomSvg;

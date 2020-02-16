import React from "react";
import styled from "styled-components";

const Wrapper = styled.svg`
    width: 100%;
    height: 100%;
    z-index: ${props => props.index};
`;

function RoomSvg(props) {
    return (
        <Wrapper
            index={props.index}
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

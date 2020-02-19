import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 100px;
    height: 100px;
    margin: -40px auto;
    background-color: transparent;
    border-style: none;
    -webkit-box-reflect: below -20px -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(transparent),
            to(rgba(250, 250, 250, 0.1))
        );
`;

const Icon = styled.img({
    filter: "invert(100%) brightness(90%)"
});

function NavbarButton(props) {
    const [buttonState, setButtonState] = useState({
        isPressed: false,
        isHovered: false
    });

    function handleMouseDown() {
        setButtonState({ ...buttonState, isPressed: true });
    }

    function handleMouseUp() {
        setButtonState({ ...buttonState, isPressed: false });
    }

    function handleMouseEnter() {
        setButtonState({ ...buttonState, isHovered: true });
    }

    function handleMouseLeave() {
        setButtonState({ ...buttonState, isPressed: false, isHovered: false });
    }

    return (
        <Button
            className="navbar-button"
            onClick={() => props.onClick(props.name)}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Icon
                style={{
                    transform:
                        (buttonState.isPressed && "scale(0.9)") ||
                        (props.name === props.activeButton && "scale(1.1)"),
                    filter:
                        buttonState.isHovered &&
                        "invert(100%) brightness(50%) sepia(100%) hue-rotate(130deg) saturate(110%) brightness(130%)"
                }}
                src={props.icon}
                alt={props.name}
            />
        </Button>
    );
}

export default NavbarButton;

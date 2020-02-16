import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button({
    width: "100px",
    height: "100px",
    margin: "-50px auto",
    backgroundColor: "transparent",
    borderStyle: "none",
    WebkitBoxReflect:
        "below 0 linear-gradient(to top, rgba(255, 255, 255, 0.5) 0% rgba(255, 255, 255, 0) 60%)"
});

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

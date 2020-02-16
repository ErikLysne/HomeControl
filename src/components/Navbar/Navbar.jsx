import React, { useState } from "react";
import styled from "styled-components";
import ShortId from "shortid";
import NavbarButton from "./NavbarButton";

const Wrapper = styled.div`
    width: 75%;
    height: 50px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    perspective: 500px;
    display: flex;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(60deg);
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0)
    );
`;

function Navbar(props) {
    const [activeButton, setActiveButton] = useState("Home");

    const buttons = [
        {
            name: "Home",
            icon: "/icons/iconfinder_home_2639835.svg"
        },
        {
            name: "Lights",
            icon: "/icons/iconfinder_idea_2639837.svg"
        },
        {
            name: "Routines",
            icon: "/icons/iconfinder_alarm_clock_2639765.svg"
        },
        {
            name: "Settings",
            icon: "/icons/iconfinder_settings_2639917.svg"
        },
        {
            name: "Network",
            icon: "/icons/iconfinder_wifi_2639756.svg"
        }
    ];

    return (
        <Wrapper>
            <Background />
            {buttons.map(button => (
                <NavbarButton
                    key={ShortId.generate()}
                    name={button.name}
                    icon={button.icon}
                    activeButton={activeButton}
                    onClick={setActiveButton}
                />
            ))}
        </Wrapper>
    );
}

export default Navbar;

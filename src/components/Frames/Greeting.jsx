import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    font-size: 1rem;
    padding: 30px;
`;

function Greeting(props) {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const interval = setInterval(() => updateGreeting(), 1000);

        return function cleanup() {
            clearInterval(interval);
        };
    });

    function updateGreeting() {
        const now = new Date();
        const hours = now.getHours();

        setGreeting(getGreeting(hours));
    }

    function getGreeting(hours) {
        let greeting = "Good ";
        if (hours >= 6 && hours < 12) {
            greeting += "Morning";
        } else if (hours >= 12 && hours < 17) {
            greeting += "Day";
        } else if (hours >= 17 && hours < 22) {
            greeting += "Evening";
        } else {
            greeting += "Night";
        }
        return greeting + ", Erik";
    }

    return <Wrapper>{greeting}</Wrapper>;
}

export default Greeting;

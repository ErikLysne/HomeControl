import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 40%;
    margin: auto;
    text-align: right;
    font-size: 1rem;
`;

function Clock(props) {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(new Date().toLocaleTimeString()),
            1000
        );

        return function cleanup() {
            clearInterval(interval);
        };
    });

    return <Wrapper>{time}</Wrapper>;
}

export default Clock;

import React, { useState, useEffect } from "react";

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

    return <div className="infobar-clock">{time}</div>;
}

export default Clock;

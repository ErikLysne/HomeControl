import { useState, useEffect } from "react";

function useWindowSize() {
    const isClient = typeof window === "object";

    function getSize() {
        return {
            windowWidth: isClient ? window.innerWidth : undefined,
            windowHeight: isClient ? window.innerHeight : undefined
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener("resize", handleResize);

        return function cleanup() {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
}

export default useWindowSize;

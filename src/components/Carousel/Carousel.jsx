import React, { useState, useEffect } from "react";
import shortid from "shortid";
import styled, { keyframes } from "styled-components";
import useWindowSize from "../../assets/functions/use-window-size.jsx";

const CarouselContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

const Frame = styled.div`
    position: absolute;
    left: 50%;
    top: 40%;
    border-color: rgba(255, 255, 255, 0.5);
    border-style: solid;
    border-width: 4px;
    transform-style: preserve-3d;
    transform: ${props =>
        transform(
            props.frameWidth,
            props.frameHeight,
            props.frameIndex,
            props.activeFrame.current,
            props.numberOfFrames,
            props.frameOffset
        )};
    z-index: ${props =>
        zIndex(
            props.frameIndex,
            props.activeFrame.current,
            props.numberOfFrames
        )};
    opacity: ${props =>
        zIndex(
            props.frameIndex,
            props.activeFrame.current,
            props.numberOfFrames
        ) === 0
            ? 1
            : 0};
`;

const AnimatedFrame = styled(Frame)`
    animation: ${props =>
            props.activeFrame.animateTransition
                ? animate(
                      props.frameWidth,
                      props.frameHeight,
                      props.frameIndex,
                      props.activeFrame,
                      props.numberOfFrames,
                      props.frameOffset
                  )
                : ""}
        ${props => props.transitionDuration}ms;
`;

function animate(
    frameWidth,
    frameHeight,
    frameIndex,
    activeFrame,
    numberOfFrames,
    frameOffset
) {
    return keyframes`
    0% {
        transform: ${transform(
            frameWidth,
            frameHeight,
            frameIndex,
            activeFrame.previous,
            numberOfFrames,
            frameOffset
        )};
        opacity: ${
            zIndex(frameIndex, activeFrame.previous, numberOfFrames) === 0
                ? 1
                : 0
        };
    }
    10% {
        transform: ${transform(
            frameWidth,
            frameHeight,
            frameIndex,
            activeFrame.previous,
            numberOfFrames,
            frameOffset
        )};
        opacity: 0.75;
    }
    100% {
        transform: ${transform(
            frameWidth,
            frameHeight,
            frameIndex,
            activeFrame.current,
            numberOfFrames,
            frameOffset
        )};
        opacity: ${
            zIndex(frameIndex, activeFrame.current, numberOfFrames) === 0
                ? 1
                : 0
        };
    }
        
`;
}

function interiorAngle(numberOfFrames) {
    return 360 / numberOfFrames;
}

function apothem(frameWidth, numberOfFrames) {
    return frameWidth / (2 * Math.tan(Math.PI / numberOfFrames));
}

function transform(
    frameWidth,
    frameHeight,
    frameIndex,
    activeFrameIndex,
    numberOfFrames,
    frameOffset
) {
    let angleOfRotation =
        (activeFrameIndex - frameIndex) * interiorAngle(numberOfFrames);

    const displacement =
        (1 + frameOffset) * apothem(frameWidth, numberOfFrames);
    let transform = "";
    // Center on screen
    transform += ` translateX(${-0.5 * frameWidth}px)`;
    transform += ` translateY(${-0.5 * frameHeight}px)`;
    // Rotate along y-axis
    transform += ` rotateY(${angleOfRotation}deg)`;
    // Translate outward to apothem + offset
    transform += ` translateZ(${displacement}px)`;
    // Rotate back to original reference frame
    transform += ` rotateY(${-angleOfRotation}deg)`;
    // Translate backwards to keep original size of the front face
    transform += ` translateZ(${-displacement}px)`;
    // Rotate back
    transform += ` rotateY(${angleOfRotation}deg)`;

    return transform;
}

function zIndex(frameIndex, activeFrameIndex, numberOfFrames) {
    const angleOfRotation =
        Math.abs(activeFrameIndex - frameIndex) * interiorAngle(numberOfFrames);

    const unwrapAngle =
        angleOfRotation <= 180 ? angleOfRotation : 360 - angleOfRotation;

    return angleOfRotation === 0
        ? 0
        : -Math.ceil(unwrapAngle / interiorAngle(numberOfFrames));
}

const RotationClickableArea = styled.div`
    width: 10%;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: transparent;
`;

const RotateRightButton = styled(RotationClickableArea)`
    right: 0;
`;

const RotateLeftButton = styled(RotationClickableArea)`
    left: 0;
`;

function Carousel(props) {
    const numberOfFrames = props.children.length ? props.children.length : 0;
    const [activeFrame, setActiveFrame] = useState({
        current: 0,
        previous: 0,
        animateTransition: false
    });

    const { windowWidth, windowHeight } = useWindowSize();
    const frameWidth = props.width * windowWidth;
    const frameHeight = props.height * windowHeight;

    function rotateRight() {
        const previousActive = activeFrame.current;
        const newActiveFrame = {
            current:
                activeFrame.current >= numberOfFrames - 1
                    ? 0
                    : activeFrame.current + 1,
            previous: previousActive,
            animateTransition: true
        };
        console.log(newActiveFrame);
        setActiveFrame(newActiveFrame);
    }

    function rotateLeft() {
        const previousActive = activeFrame.current;
        const newActiveFrame = {
            current:
                activeFrame.current === 0
                    ? numberOfFrames - 1
                    : activeFrame.current - 1,
            previous: previousActive,
            animateTransition: true
        };
        console.log(newActiveFrame);
        setActiveFrame(newActiveFrame);
    }

    useEffect(() => {
        if (activeFrame.animateTransition) {
            setTimeout(function() {
                setActiveFrame({
                    ...activeFrame,
                    animateTransition: false
                });
            }, props.transitionDuration);
        }
    });

    let index = 0;
    return (
        <CarouselContainer style={{ perspective: "4000px" }}>
            {React.Children.map(props.children, child => (
                <AnimatedFrame
                    key={shortid.generate()}
                    style={{ width: frameWidth, height: frameHeight }}
                    frameWidth={frameWidth}
                    frameHeight={frameHeight}
                    frameIndex={index++}
                    activeFrame={activeFrame}
                    numberOfFrames={numberOfFrames}
                    frameOffset={props.frameOffset}
                    transitionDuration={props.transitionDuration}
                >
                    {child}
                    <RotateRightButton onClick={rotateRight} />
                    <RotateLeftButton onClick={rotateLeft} />
                </AnimatedFrame>
            ))}
        </CarouselContainer>
    );
}

Carousel.defaultProps = {
    width: 0.9,
    height: 0.75,
    frameOffset: 0.1,
    transitionDuration: 1000
};

export default Carousel;

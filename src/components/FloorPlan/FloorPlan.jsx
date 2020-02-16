import React from "react";
import ShortId from "shortid";
import styled from "styled-components";
import RoomModel from "./RoomModel";
import RoomArea from "./RoomArea";
import RoomAnnotation from "./RoomAnnotation";
import Rooms from "../../assets/floorplan/rooms.json";

const Wrapper = styled.div`
    width: 50%;
    height: 80%;
    position: relative;
`;

const Room = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem;
    pointer-events: none;
`;

const viewBox = {
    minX: 425,
    minY: 100,
    width: 890,
    height: 575
};

function FloorPlan() {
    return (
        <Wrapper>
            {Rooms.map(room => (
                <div key={ShortId.generate()}>
                    <RoomModel
                        key={ShortId.generate()}
                        name={room.name}
                        index={room.index}
                        offset={room.offset.background}
                        path={room.path.background}
                        viewBox={viewBox}
                    />
                    <RoomArea
                        key={ShortId.generate()}
                        name={room.name}
                        index={room.index}
                        area={room.coordinates.area}
                        viewBox={viewBox}
                    />
                    <RoomAnnotation
                        key={ShortId.generate()}
                        name={room.name}
                        path={room.coordinates.annotation}
                        viewBox={viewBox}
                    />
                    <RoomModel
                        key={ShortId.generate()}
                        name={room.name}
                        index={room.index}
                        offset={room.offset.foreground}
                        path={room.path.foreground}
                        viewBox={viewBox}
                    />
                </div>
            ))}
        </Wrapper>
    );
}

export default FloorPlan;

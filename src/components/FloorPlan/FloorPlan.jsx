import React, { useState } from "react";
import ShortId from "shortid";
import styled from "styled-components";
import RoomModel from "./RoomModel";
import RoomArea from "./RoomArea";
import RoomAnnotation from "./RoomAnnotation";
import Rooms from "../../assets/floorplan/rooms.json";

const Wrapper = styled.div`
    width: 50%;
    height: 80%;
    left: 0;
    position: absolute;
    z-index: 0;
`;

const DeselectRoomArea = styled.div`
    width: 100%;
    height: 100%;
`;

const viewBox = {
    minX: 425,
    minY: 100,
    width: 890,
    height: 575
};

function FloorPlan(props) {
    return (
        <Wrapper>
            <DeselectRoomArea onClick={() => props.setActiveRoom("House")} />
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
                        onClick={props.setActiveRoom}
                        activeRoom={props.activeRoom}
                    />
                    <RoomAnnotation
                        key={ShortId.generate()}
                        name={room.name}
                        path={room.coordinates.annotation}
                        viewBox={viewBox}
                        activeRoom={props.activeRoom}
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

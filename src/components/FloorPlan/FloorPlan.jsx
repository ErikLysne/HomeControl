import React from "react";
import ShortId from "shortid";
import RoomModel from "./RoomModel";
import RoomAnnotation from "./RoomAnnotation";
import Rooms from "../../assets/floorplan/rooms.json";

function FloorPlan() {
    const viewBox = {
        minX: 475,
        minY: 100,
        width: 890,
        height: 575
    };

    return (
        <div className="floor-plan">
            {Rooms.map(room => (
                <div key={ShortId.generate()}>
                    <RoomModel
                        key={ShortId.generate()}
                        name={room.name}
                        index={room.index}
                        offsetX={room.offsetX}
                        offsetY={room.offsetY}
                        path={room.path}
                        viewBox={viewBox}
                    />
                    <RoomAnnotation
                        key={ShortId.generate()}
                        name={room.name}
                        offsetX={room.offsetX}
                        offsetY={room.offsetY}
                        path={room.annotationPath}
                        viewBox={viewBox}
                    />
                </div>
            ))}
        </div>
    );
}

export default FloorPlan;

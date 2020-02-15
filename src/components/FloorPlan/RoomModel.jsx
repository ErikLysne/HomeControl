import React from "react";
import RoomSvg from "./RoomSvg";

function RoomModel(props) {
    return (
        <div className="room">
            <RoomSvg index={props.index} viewBox={props.viewBox}>
                <path
                    transform={
                        "translate(" +
                        props.offsetX +
                        ", " +
                        props.offsetY +
                        ")"
                    }
                    className="room-model__path"
                    d={props.path}
                />
            </RoomSvg>
        </div>
    );
}

export default RoomModel;

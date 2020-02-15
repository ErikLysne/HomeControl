import React from "react";
import Logo from "./Logo";
import Clock from "./Clock";

function Infobar() {
    return (
        <div className="infobar">
            <Clock />
            <Logo />
        </div>
    );
}

export default Infobar;

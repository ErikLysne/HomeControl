import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Logo() {
    return (
        <div className="infobar-logo">
            HOME CONTROL <FontAwesomeIcon icon={faHome} />
        </div>
    );
}

export default Logo;

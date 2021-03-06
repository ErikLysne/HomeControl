import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
    width: 60%;
    margin: auto 40px auto 0;
    color: #fff;
    font-family: "Exo 2", sans-serif;
    font-size: 2rem;
    text-align: right;
`;

function Logo() {
    return (
        <Wrapper>
            HOME CONTROL <FontAwesomeIcon icon={faHome} />
        </Wrapper>
    );
}

export default Logo;

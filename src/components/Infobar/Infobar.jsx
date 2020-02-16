import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Clock from "./Clock";

const Wrapper = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
`;

function Infobar() {
    return (
        <Wrapper>
            <Clock />
            <Logo />
        </Wrapper>
    );
}

export default Infobar;

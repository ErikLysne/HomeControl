import React from "react";
import styled from "styled-components";
import Frame from "./Frame";

const Wrapper = styled(Frame)`
    width: 25%;
    right: 1%;
    top: 50vh;
    bottom: 175px;
    border-color: rgba(255, 255, 255, 0.5);
    border-style: solid;
    border-width: 2px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 20px;
    }

    &::-webkit-scrollbar-track {
        background: tramsparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #000;
        border-radius: 5px;
        border-style: solid;
        border-width: 2px;
        border-color: #e5e5e5;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

const Text = styled.div`
    width: 90%;
    height: 90%;
    font-size: 0.75rem;
    padding: 5%;
`;

function LogFrame() {
    return (
        <Wrapper>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
                molestie at elementum eu facilisis sed odio. Nec feugiat in
                fermentum posuere. Leo urna molestie at elementum eu facilisis
                sed. Ac odio tempor orci dapibus ultrices in. Volutpat ac
                tincidunt vitae semper quis lectus. Pellentesque eu tincidunt
                tortor aliquam nulla facilisi. Commodo viverra maecenas accumsan
                lacus vel facilisis. Sit amet tellus cras adipiscing enim eu
                turpis egestas. In tellus integer feugiat scelerisque varius
                morbi. Potenti nullam ac tortor vitae. Tristique et egestas quis
                ipsum. Duis tristique sollicitudin nibh sit amet commodo. Tempus
                egestas sed sed risus pretium quam vulputate dignissim
                suspendisse. Urna molestie at elementum eu facilisis sed. Erat
                imperdiet sed euismod nisi porta lorem mollis aliquam. Non
                pulvinar neque laoreet suspendisse interdum consectetur libero.
                Sapien pellentesque habitant morbi tristique senectus et netus
                et malesuada. Tincidunt eget nullam non nisi est sit amet
                facilisis magna. Sapien et ligula ullamcorper malesuada. Nam
                aliquam sem et tortor consequat id. Porta lorem mollis aliquam
                ut porttitor leo a diam. Nibh tellus molestie nunc non blandit
                massa enim nec. Tincidunt eget nullam non nisi est sit amet.
                Aliquam faucibus purus in massa tempor nec. Aliquam id diam
                maecenas ultricies mi eget. Augue interdum velit euismod in.
                Risus viverra adipiscing at in tellus integer feugiat
                scelerisque varius.
            </Text>
        </Wrapper>
    );
}

export default LogFrame;

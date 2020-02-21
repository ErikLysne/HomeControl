import React from "react";
import Navbar from "./Navbar/Navbar";
import Infobar from "./Infobar/Infobar";
import LightFrame from "./Frames/LightFrame";
import Carousel from "./Carousel/Carousel";

function App() {
    return (
        <div className="app">
            <Infobar />
            <Carousel>
                <LightFrame />
                <div style={{ width: "100%", height: "100%", display: "flex" }}>
                    <h1 style={{ margin: "auto" }}>Frame 1</h1>
                </div>
                <div style={{ width: "100%", height: "100%", display: "flex" }}>
                    <h1 style={{ margin: "auto" }}>Frame 2</h1>
                </div>
                <div style={{ width: "100%", height: "100%", display: "flex" }}>
                    <h1 style={{ margin: "auto" }}>Frame 3</h1>
                </div>
                <div style={{ width: "100%", height: "100%", display: "flex" }}>
                    <h1 style={{ margin: "auto" }}>Frame 4</h1>
                </div>
                <div style={{ width: "100%", height: "100%", display: "flex" }}>
                    <h1 style={{ margin: "auto" }}>Frame 5</h1>
                </div>
            </Carousel>
            <Navbar />
        </div>
    );
}

export default App;

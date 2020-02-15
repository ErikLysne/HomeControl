import React from "react";
import Navbar from "./Navbar/Navbar";
import Infobar from "./Infobar/Infobar";
import MainFrame from "./Frames/MainFrame";
import LogFrame from "./Frames/LogFrame";

function App() {
    return (
        <div className="app">
            <Infobar />
            <MainFrame />
            <LogFrame />
            <Navbar />
        </div>
    );
}

export default App;

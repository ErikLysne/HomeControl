import React from "react";
import ShortId from "shortid";
import NavbarButton from "./NavbarButton";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeButton: "Home" };
        this.buttons = [
            {
                name: "Home",
                icon: "/icons/iconfinder_home_2639835.svg"
            },
            {
                name: "Lights",
                icon: "/icons/iconfinder_idea_2639837.svg"
            },
            {
                name: "Routines",
                icon: "/icons/iconfinder_alarm_clock_2639765.svg"
            },
            {
                name: "Settings",
                icon: "/icons/iconfinder_settings_2639917.svg"
            },
            {
                name: "Network",
                icon: "/icons/iconfinder_wifi_2639756.svg"
            }
        ];

        this.setActiveButton = this.setActiveButton.bind(this);
    }

    setActiveButton(buttonName) {
        this.setState({ activeButton: buttonName });
    }

    render() {
        return (
            <div className="navbar">
                <div
                    key={ShortId.generate()}
                    className="navbar__background"
                ></div>
                {this.buttons.map(button => (
                    <NavbarButton
                        key={ShortId.generate()}
                        name={button.name}
                        icon={button.icon}
                        activeButton={this.state.activeButton}
                        onClick={this.setActiveButton}
                    />
                ))}
            </div>
        );
    }
}

export default Navbar;

import React from "react";

class NavbarButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isPressed: false, isHovered: false };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseDown() {
        this.setState({ ...this.state, isPressed: true });
    }

    handleMouseUp() {
        this.setState({ ...this.state, isPressed: false });
    }

    handleMouseEnter() {
        this.setState({ ...this.state, isHovered: true });
    }

    handleMouseLeave() {
        this.setState({ ...this.state, isPressed: false, isHovered: false });
    }

    render() {
        return (
            <button
                className="navbar-button"
                onClick={() => this.props.onClick(this.props.name)}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <img
                    className="navbar-button__icon"
                    style={{
                        transform:
                            (this.state.isPressed && "scale(0.9)") ||
                            (this.props.name === this.props.activeButton &&
                                "scale(1.1)"),
                        filter:
                            this.state.isHovered &&
                            "invert(100%) brightness(50%) sepia(100%) hue-rotate(130deg) saturate(110%) brightness(130%)"
                    }}
                    src={this.props.icon}
                    alt={this.name}
                ></img>
            </button>
        );
    }
}

export default NavbarButton;

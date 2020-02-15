import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = { greeting: "" };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateGreeting(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateGreeting() {
        const now = new Date();
        const hours = now.getHours();
        const mins = now.getMinutes();

        this.setState({ greeting: this.getGreeting(hours) });
    }

    getGreeting(hours) {
        let greeting = "Good ";
        if (hours >= 6 && hours < 12) {
            greeting += "Morning";
        } else if (hours >= 12 && hours < 17) {
            greeting += "Day";
        } else if (hours >= 17 && hours < 22) {
            greeting += "Evening";
        } else {
            greeting += "Night";
        }
        return greeting + ", Erik";
    }

    render() {
        return (
            <div className="frame--main__greeting">{this.state.greeting}</div>
        );
    }
}

export default Greeting;

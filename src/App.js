import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            backgroundColors: ["orange", "blue", "green", "yellow", "purple", "red", "pink"],
            currentColorIndex: 0,
        };
    }

    tick() {
        this.setState((state) => ({
            seconds: state.seconds + 1,
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleButtonClick = () => {
        const { backgroundColors, currentColorIndex } = this.state;
        const nextColorIndex = (currentColorIndex + 1) % backgroundColors.length;
        this.setState({ currentColorIndex: nextColorIndex });
    };

    render() {
        const { seconds, backgroundColors, currentColorIndex } = this.state;
        const currentColor = backgroundColors[currentColorIndex];

        return (
            <div>
                <h1 className="text" style={{ backgroundColor: currentColor }}>
                    Секунды: {seconds}
                </h1>
                <button className="btn" onClick={this.handleButtonClick}>Изменить цвет</button>
            </div>
        );
    }
}

export default Timer;





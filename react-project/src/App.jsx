import { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentScore: 0,
            bestScore: 0,
        };

        this.handleScore
    }

    handleScore(increment) {
        if(increment) {
            this.setState({
                currentScore: this.state.currentScore + 1,
            });
        } else {
            this.setState({
                currentScore: 0,
            });
        }
    }

    render() {
        const { currentScore, bestScore } = this.state;
        return (
            <div className="App">
                <Header currentScore={currentScore} bestScore={bestScore} />
                <Game />
            </div>
        );
    }
}

export default App;
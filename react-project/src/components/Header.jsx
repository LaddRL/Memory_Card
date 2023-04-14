import React, { Component } from "react";

class Header extends Component {
    render() {
        const { currentScore, bestScore } = this.props;
        return (
            <header className="App-header">
                <h1>Memory Game</h1>
                <div className="d-flex justify-content-around align-items-center">
                    <p>Current Score</p>
                    <p>Best Score</p>
                </div>
            </header>
        );
    }
}

export default Header;
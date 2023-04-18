import React, { Component } from "react";
import Prompt from "./Prompt";

const items = [];

for(let i = 65; i < 75; i++) {
    items.push({
        id: i,
        content: String.fromCharCode(i),
        displayed: false,
    });
}

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items,
        };
    }

    handleAnswer(event, id, answer) {
    // Compare item.display with answer
        // Either increment or reset current score
        this.props.handleScore(this.items[id].displayed === answer);
    // Change the item that is displayed
    // If the shown item hasn't been displayed, changed displayed property to true
        if(this.state.items[id].displayed) {
            const items = this.state.items.map(item => {
                if(item.displayed) {
                    return item;
                } else {
                    item.displayed = true;
                    return item;
                }
            });
            this.setState({ items });
        }
    }

    randomItemIndex() {
        let rand = Math.floor(Math.random() * items.length);
        return rand;
    }

    render() {
        const { items } = this.state;
        const item = items[this.randomItemIndex()];
        return (
            <main className="d-flex justify-content-around align-items-center">
                <p>{item.content}</p>
                <Prompt item={item} handleAnswer={this.handleAnswer} />
            </main>
        );
    }
}

export default Game;
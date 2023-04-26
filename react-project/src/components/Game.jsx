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

        this.handleAnswer = this.handleAnswer.bind(this);
    }

    handleAnswer(event, item, index, answer) {
    // Compare item.display with answer
        // Either increment or reset current score
        console.log(item.displayed, answer);
        this.props.handleScore(item.displayed === answer);
    // Change the item that is displayed
    // If the shown item hasn't been displayed, changed displayed property to true
            const items = this.state.items.map((i) => {
                if(i == item) {
                        i.displayed = true;
                        return i;
                } else return i;
            });
            this.setState({ items });
        }


    randomItemIndex() {
        let rand = Math.floor(Math.random() * items.length);
        return rand;
    }

    render() {
        const { items } = this.state;
        const index = this.randomItemIndex();
        const item = items[index];
        return (
            <main>
                <p id={index}>{item.content}</p>
                <Prompt item={item} index={index} handleAnswer={this.handleAnswer} />
            </main>
        );
    }
}

export default Game;
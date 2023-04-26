import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

function App(){
    
    let [items, setItems] = useState([])
    let [currentScore, setCurentScore] = useState(0)
    let [bestScore, setBestScore] = useState(0)


    function handleScore(increment){
        if(increment){
            setCurentScore(
                currentScore + 1,
            )
        } else {
            if(currentScore>bestScore){
                setBestScore(currentScore)
            }
            setCurentScore(0)
        }
    }

    return(
        <div className='App'>
            <Header currentScore={currentScore} bestScore={bestScore} />
            <Game handleScore={handleScore} />
        </div>
    )
}

export default App;
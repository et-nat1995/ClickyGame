import React from "react";
import data from "../../data.json"
import NavBar from "../navbar"
import GameCard from "../GameCard"
import JumboTron from "../JumboTron"
import Shuffle from "shuffle-array";
import "./style.css"

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            data,
            score: 0,
            topScore: 0
        }
    }alreadyGuessed = [];


    handleImageClick = id => {
      const { data } = this.state;
      // console.log(id);
      data.forEach(item => {
        if (id === item.id) {
          item.clicked = true;
        }
      });
      this.setState({ data });
  
  
      console.log(id)
  
      if (this.alreadyGuessed.includes(id)){
        this.alreadyGuessed = [];
        this.setState({score: 0})
        this.setState({data: Shuffle(this.state.data)})
      } else {
        this.alreadyGuessed.push(id);
        this.setState({ score: this.state.score + 1 });
        // this.setState({ topScore: this.state.score + 1 });
        if ((this.state.score) >= (this.state.topScore)){
          this.setState({topScore: this.state.score + 1})
        }
        this.setState({ data: Shuffle(this.state.data) });
        // this.setState({ data: shuffle(this.state.data) });
      }
     
    }
    // method to reset data clicked to false
    resetData() {
        for (var i = 0; i < data.length; i++) {
            data[i].clicked = false;
        }
    }

    render() {
        const { data, score, topScore } = this.state;

        return (
            <div>
                <NavBar score={score} topScore={topScore} />
                <JumboTron />
                <div className="container">
                    {data.map( item => {
                        return (<GameCard handleImageClick={this.handleImageClick} key={item.id}  {...item} />)
                    }
                    )}

                </div>
            </div>
        )
    }
}

export default Game;
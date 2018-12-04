import React from "react";
import "./style.css";


function GameCard(props){
    return(
        <div className="img" onClick={() => props.handleImageClick(props.id)}>
            <img src={props.image} alt=""/>
        </div>
    )
    
}

export default GameCard;
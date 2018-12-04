import React from "react"
import "./style.css"

function NavBar(props) {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li> Clicky Game!</li>
                    <li> Click An Image to Begin </li>
                    <li> Score: {props.score} | top score {props.topScore} </li>
                </ul>

            </nav>
        </div>
    )
}

export default NavBar;